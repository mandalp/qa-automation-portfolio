describe('Play Video Test', () => {
  it('should play the video successfully', () => {
    cy.login()
    cy.goTo('Video', 'Video')

    cy.get('iframe[title="Video Player"]')
        .should('exist')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .as('iFramePlayer')
    
    cy.get('@iFramePlayer')
        .find('.play-button')
        .click()
    
    cy.get('@iFramePlayer')
        .find('.pause-button')
        .should('be.visible')
    });
});