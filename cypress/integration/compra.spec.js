/// <reference types="cypress"/>

context('Compra', () => {
    beforeEach(() => {
       cy.backgroundLogin()
    });

    it('', () => {
        cy.visit('/');
        let nomeProduto = 'Faded Short Sleeve T-shirts';

        cy.contains(nomeProduto).trigger('mouseover');
        cy.contains(nomeProduto)
            .parent()//buscar o elemento pai h5
            .siblings('div.button-container') //buscaos filhos
            .children('a')
            .first() //add to cart
            .click()

        //validação se o produto foi selecionado com sucesso
        cy.get('.icon-ok')
            .parent()//pegando o pai
            .should('contain.text','Product successfully added to your shopping cart');

        cy.get('span#layer_cart_product_title')
            .should('contain.text',nomeProduto);

        //cy.pause()//para o teste nesse momento, remover após teste.

        cy.get(".button-container a[href$='controller=order']").click();
        cy.get(".cart_navigation a[href$='step=1']").click();

        //cy.get("#email").type("ricardoteste@teste.com");
        //cy.get("#passwd").type("teste123");
        //cy.get("#SubmitLogin").click();


        //Dúvida 01 o valor checked não diferencia se está checkado ou não?

        cy.get('[type=checkbox]#addressesAreEquals')
            .should('have.attr','checked','checked');//asserção| atributo| valor
        cy.get('[type=checkbox]#addressesAreEquals')
            .should('have.attr','name','same');//asserção| atributo| valor

        cy.get("button[name=processAddress]").click();

        cy.get('[type=checkbox]#cgv').check();
        cy.get("button[name=processCarrier]").click();

        cy.get('.bankwire').click();
        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click();

        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.');

        cy.get('div.box')
            .invoke('text').then((text)=>{
                //console.log(text)
                console.log(text.match(/[A-Z][A-Z]+/g)[1])
                //escrita de um arquivo Json
                //caminho do arquivo(sempre a partir do root)| conteudo do arquivo
                cy.writeFile('cypress/fixtures/pedido.json',{id: `${ text.match(/[A-Z][A-Z]+/g)[1] }`});
            })

        cy.get(".cart_navigation a[href$='history']").click()
        
        //leitura de um arquivo json
        cy.readFile('cypress/fixtures/pedido.json').then((pedido)=>{
            cy.get('tr.first_item .history_link a')
            .should('contain.text',pedido.id);
            //teste
        })
        
    });
});