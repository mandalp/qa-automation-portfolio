Cypress.Commands.add('postUser', (user) => {
  return cy.api({
    method: 'POST',
    url: '/api/users/register',
    body: user,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getUsers', (user) => {
  return cy.api({
    method: 'GET',
    url: '/api/users',
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('putUser', (userId, newUserData) => {
  return cy.api({
    method: 'PUT',
    url: '/api/users/' + userId,
    headers: {
      'Content-Type': 'application/json'
    },
    body: newUserData,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('deleteUser', (userId) => {
  return cy.api({
    method: 'DELETE',
    url: `/api/users/${userId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
})