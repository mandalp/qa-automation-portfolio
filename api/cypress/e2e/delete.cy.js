import userData from '../fixtures/users.json'



describe('DELETE /api/users/:id', () => {

    context('Delete', () => {
        const user = userData.hp[0]
        let userID
        before(() => {
            cy.task('deleteUser', user.email)

            cy.postUser(user).then(response => {
                userID = response.body.user.id
            })
        })

        it('should delete an existing user', () => {
            cy.deleteUser(userID).then(response => {
                expect(response.status).to.eq(204)
            })
        })

        after(() => {
            cy.getUsers().then(response => {
                const userDeleted = response.body.find(user => user.id === userID)
                expect(userDeleted).to.be.undefined
            })
        })
    })

    context('when id is invalid', () => {
        const user = userData.hp[2]
        let userID
        before(() => {
            cy.task('deleteUser', user.email)

            cy.postUser(user).then(response => {
                userID = response.body.user.id
            })

            cy.task('deleteUser', user.email)
        })

        it('should return a 404 error when the user does not exist', () => {
            cy.deleteUser(userID).then(response => {
                expect(response.status).to.eq(404)
                expect(response.body.error).to.eq('User not found')
            })
        })
    })
})
