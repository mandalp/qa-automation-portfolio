describe('Kanban Board Test', () => {
    it('should move a card from To Do to Done', () => {
        cy.login()
        cy.goTo('Kanban', 'Kanban Board')

        const dataTransfer = new DataTransfer();

        const elementdragged = 'Documentar API';
        cy.contains('div[draggable="true"]', elementdragged)
            .trigger('dragstart', { dataTransfer });
        
        cy.get('.column-done')
            .trigger('drop', { dataTransfer })
            .find('h3')
            .should('have.text', 'Done (4)')
        
        cy.get('.column-done')
            .and('include.text', elementdragged);
    })
});