describe('POST /api/users/register', () => {
  
  it('should be register a new user', () => {
    const user = {
          name: 'Harry Potter',
          email: 'harryp@hp.com',
          password: 'pwd123'
    }

    cy.task('deleteUser', user.email)

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('User successfully registered.')
      expect(response.body.user.id).to.match(/^[-]?\d+$/) //integer
      expect(response.body.user.name).to.eq(user.name)
      expect(response.body.user.email).to.eq(user.email)
    })
  })

  it('the email field must be unique', () => {
    const user = {
          name: "Hermione Granger",
          email: 'hermione@hp.com',
          password: 'pwd123'
    }

    cy.task('deleteUser', user.email)

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201)
    })

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(409)
      expect(response.body.error).to.eq('A user with this email already exists.')
    })
  })
  
  it('the name field must be required.', () => {
    const user = {
          email: 'voldemort@hp.com',
          password: 'pwd123'
    }

    cy.postUser(user).then((response) => {  
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('The \"name\" field is required!')
    })
  })

  it('the email field must be required.', () => {
    const user = {
          name: 'Draco Moalfoy',
          password: 'pwd123'
    }

    cy.postUser(user).then((response) => {  
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('The \"email\" field is required!')
    })
  })

  it('the password field must be required.', () => {
    const user = {
          name: 'dobby',
          email: 'dobby@hp.com'
    }

    cy.postUser(user).then((response) => {  
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('The \"password\" field is required!')
    })
  })

  it('you must validate the JSON formatting.', () => {
    const user = `{
          name: 'Sirius Black',
          email: 'siriusb@hp.com'
          password: 'pwd123'
    }`

    cy.postUser(user).then((response) => {  
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Invalid JSON format.')
    })
  })
})