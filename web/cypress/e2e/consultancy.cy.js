import {personal, company} from '../fixtures/consultancy.json'

describe('consulting form', () => {
    // Enviar formulario de consultoria com documento invalido
    // enviar formulario sem aceitar termos de uso
    beforeEach(() => {
        // Arrange
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    })

    it('should request individual consultation', () => {
        // Act
        cy.fillConsultancyForm(personal)
        cy.submitForm('button', 'Enviar formulário')

        // Assert
        cy.modalMessageShouldBeVisible('com sucesso!')
    })

    it('should request company consultation', () => {
        // Act
        cy.fillConsultancyForm(company)
         cy.submitForm('button', 'Enviar formulário')

        // Assert
        cy.modalMessageShouldBeVisible('com sucesso!')
    })

    it('should verify required fields validation', () => {
        // Act
         cy.submitForm('button', 'Enviar formulário')

        // Assert
        const requiredFields = [
            { field: 'Nome Completo *', message: 'Campo obrigatório' },
            { field: 'Email *', message: 'Campo obrigatório' },
            { field: 'termos de uso *', message: 'Você precisa aceitar os termos de uso' }
        ]
        requiredFields.forEach(({ field, message }) => {
            cy.shouldShowFieldError(field, message)
        })
    })
})