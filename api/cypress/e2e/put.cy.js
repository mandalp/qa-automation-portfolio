import usersData from '../fixtures/users.json'

describe('PUT /api/users/:id', () => {
    let originalUser
    let updatedUser
    let userID
    context('Updating', () => {


        before(() => {
            const index = Math.floor(Math.random() * (usersData.hp.length - 1))

            originalUser = usersData.hp[index]
            updatedUser = usersData.hp[index + 1]

            cy.task('deleteUser', originalUser.email)
            cy.task('deleteUser', updatedUser.email)
            cy.postUser(originalUser).then(response => {
                userID = response.body.user.id
            })
        })

        it('should update an existing user', () => {
            cy.putUser(userID, updatedUser).then(response => {
                expect(response.status).to.eq(204)
            })
        })

        it('you must validate the JSON formatting.', () => {
            const user = `{
            name: 'Sirius Black',
            email: 'siriusb@hp.com'
            password: 'pwd123'
        }`

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Invalid JSON format.')
            })
        })

        after(() => {
            cy.getUsers().then(response => {
                const user = response.body.find(user => user.id === userID)
                expect(user).to.exist
                expect(user.name).to.eq(updatedUser.name)
            })
        })
    })

    context('Required fields', () => {
        it('the name field must be required.', () => {
            const user = {
                email: 'voldemort@hp.com',
                password: 'pwd123'
            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('The \"name\" field is required!')
            })
        })

        it('the email field must be required.', () => {
            const user = {
                name: 'Draco Moalfoy',
                password: 'pwd123'
            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('The \"email\" field is required!')
            })
        })

        it('the password field must be required.', () => {
            const user = {
                name: 'dobby',
                email: 'dobby@hp.com'
            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('The \"password\" field is required!')
            })
        })
    })

    context('when id is invalid', () => {

        before(() => {
            cy.task('deleteUser', originalUser.email)
            cy.task('deleteUser', updatedUser.email)

            cy.postUser(originalUser).then(response => {
                userID = response.body.user.id
            })

            cy.task('deleteUser', originalUser.email)
        })

        it('should return a 404 error when the user does not exist', () => {
            cy.putUser(userID, updatedUser).then(response => {
                expect(response.status).to.eq(404)
                expect(response.body.error).to.eq('User not found')
            })
        })
    })
})