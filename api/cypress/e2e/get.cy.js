import { hp } from '../fixtures/users.json'
describe('GET /api/users', () => {
    before(() => {
        hp.forEach(element => {
            cy.postUser(element)
        });
    })

    it('should return user list', () => {
        cy.getUsers().then(response => {
            // Assert status code
            expect(response.status).to.eq(200);
            // Assert response body is an array
            expect(response.body).to.be.an('array');
            // Assert at least one user exists
            expect(response.body.length).to.be.greaterThan(0);
            // Assert structure of first user (example)
            expect(response.body[0]).to.have.property('name');

            hp.forEach((hpUser) => {
                const found = response.body.find((user) => user.email === hpUser.email)
                expect(found.name).to.eq(hpUser.name)
                expect(found.email).to.eq(hpUser.email)
                expect(found).to.have.property('id');
            })
        })
    })
})