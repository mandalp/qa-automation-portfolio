import address from '../fixtures/cep.json'

describe('CEP form', () => {
    // cep validp
    // cep invalido
    // cep inexistente 

    beforeEach(() => {
        // Arrange
        cy.login()
        cy.goTo('Integração', 'Consulta de CEP')
    })

    it('should search for a valid CEP', () => {
        // Act 
        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/` , {
            statusCode: 200,
            body: {
                logradouro: address.street,
                bairro: address.neighborhood,
                localidade: address.city,
                uf: address.state
            }
        }).as('getCep') // mock informations

        cy.fillCep(address.cep)
        cy.submitForm('button', 'Buscar')

        cy.wait('@getCep')

        // Assert
        cy.validateAddressFromCep(address)
    })
})