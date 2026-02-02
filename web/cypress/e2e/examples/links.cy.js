describe('Open link in new tab/window', () => {
    it('Validate attributes of Instagram link', () => {
        cy.login()

        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener noreferrer')

    });

    it('Access Terms of Use link by removing target attribute', () => {
        cy.login()

        cy.goTo('Formulários', 'Consultoria')

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target')
            .click()
        cy.contains('Ao acessar e usar nossos serviços, você concorda em cumprir estes termos ')
            .should('be.visible')
    })
});