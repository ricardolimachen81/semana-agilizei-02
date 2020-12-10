// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', ()=>{
    cy.setCookie('PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'R6xmma6F4U6edNQuu67M0nmQO%2Fuha0gV9ZRdXAy4JlmbfPynY4IABBV0GHpHozgmhQBx3ErVnS41zFhrA1snSh%2F47J8BpfUJ%2Ben3ae%2BpQ9iWDv%2BukF2TxwEPfufulq25KXOB4w%2BfJh7Clek0Q42VhFUBDOaq1LUUeMz8jd6yHnyygUzv0NCoqiv4NfCVxI8QyWppnb0iu%2F0tihY5E5egT%2BwGACA5xp0s9YAlRMfVc37x3MQOLOIHEjNd2dnNPApWm1Pnfpx3oH7saNY%2FnqigZMs7Jo4%2Bh8TkYBaDOhwfG9vRV1ThsR0R0brb2qEQxj7AJSKAzSi7i%2FUV2sHxyyJa%2FKtYA%2FrpO60%2B9hhqexMzDOpIDTBO%2FOtYC3kXALoKV%2BV28bUDA601BFJDxnSKp0ayww%3D%3D000296'
    )
})
