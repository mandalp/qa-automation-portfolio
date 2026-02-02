describe('Alerts', () => {
  beforeEach(() => {
    cy.login()
    cy.goTo('Alertas JS', 'JavaScript Alerts')
  })

    it('should handle a js alert', () => {
        cy.contains('button', 'Mostrar Alert').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Olá QA, eu sou um Alert Box!')
        })
    })

    it('should handle a js confirm - accept', () => {
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Aperte um botão!')
            return true
        })

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
        
    })

    it('should handle a js confirm - cancel', () => {
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Aperte um botão!')
            return false
        })

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Você cancelou!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('should handle a js prompt', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Cypress Test')
        })

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Olá Cypress Test! Boas-vindas ao WebDojo!')
        })

        cy.contains('button', 'Mostrar Prompt').click()
        
    })

})