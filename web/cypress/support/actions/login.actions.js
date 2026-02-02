import { getTodayFormatted } from '../utils'

Cypress.Commands.add('validateSuccessfulLogin', (user) => {

  cy.get('[data-cy="user-name"]')
    .should('be.visible')
    .and('contain', user.name)

  cy.get('[data-cy="welcome-message"]')
    .should('be.visible')
    .and('contain', user.welcomeMessage)

  cy.getCookie('login_date')
    .should('exist')
    .and((cookie) => {
      expect(cookie.value).to.eq(getTodayFormatted())
    })
  
  cy.window().then((win) => {
    const token = win.localStorage.getItem('token')
    expect(token).to.match(/^[a-fA-F0-9]{32}$/)
  })
})

Cypress.Commands.add('submitLoginForm', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('button[type="submit"]').click()
})