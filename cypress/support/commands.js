Cypress.Commands.add("apiGet", (url, queryParams = {}, headers = {}) => {
  return cy.request({
    method: "GET",
    url,
    qs: queryParams,
    headers: headers,
  });
});

Cypress.Commands.add("apiPost", (url, body = {}, headers = {}) => {
  return cy.request({
    method: "POST",
    url,
    body,  
    headers,
  });
});

Cypress.Commands.add("apiPut", (url, body = {}, headers = {}) => {
  return cy.request({
    method: "PUT",
    url,
    body,  
    headers, 
  });
});

Cypress.Commands.add("apiDelete", (url, headers = {}) => {
  return cy.request({
    method: "DELETE",
    url,
    headers, 
  });
});
