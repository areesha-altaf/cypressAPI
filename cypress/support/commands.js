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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("apiGet", (url, options = {}) => {
    cy.request({
      method: 'GET',
      url,
      ...options
    }).then((response) => {
      return response;
    });
  });
  
  Cypress.Commands.add("apiPost", (url, body, options = {}) => {
    cy.request({
      method: 'POST',
      url,
      body,
      ...options
    }).then((response) => {
      return response;
    });
  });
  
  Cypress.Commands.add("apiPut", (url, body, options = {}) => {
    cy.request({
      method: 'PUT',
      url,
      body,
      ...options
    }).then((response) => {
      return response;
    });
  });
  
  Cypress.Commands.add("apiDelete", (url, options = {}) => {
    cy.request({
      method: 'DELETE',
      url,
      ...options //for variable number of args in 1 array
    }).then((response) => {
      return response;
    });
  });
  