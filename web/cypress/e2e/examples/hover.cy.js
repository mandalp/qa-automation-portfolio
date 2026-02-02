describe('Mouse Hover Test', () => {
    beforeEach(() => {
        cy.login()
    })

    it('should display tooltip on Instagram hover', () => {
        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist')
    })
});