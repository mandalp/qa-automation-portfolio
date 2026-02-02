Cypress.Commands.add('fillCep', (cep) => {
    cy.get('#cep').type(cep)
})

Cypress.Commands.add('validateAddressFromCep', (address) => {
  cy.get('#street').should('have.value', address.street)
  cy.get('#neighborhood').should('have.value', address.neighborhood)
  cy.get('#city').should('have.value', address.city)
  cy.get('#state').should('have.value', address.state)
})