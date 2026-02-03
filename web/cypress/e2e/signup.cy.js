describe('Signup', () =>{
    //validar obrigatoriedade dos campos
    // digitar senha invalida 
    // digitar email invalido
    // email existente

    beforeEach(() => {
        cy.goToSignup('a[href="/register"]', 'Crie sua conta')

    })

    it('should register a new user ', () => {
        cy.get('#name').type('Amanda')
        cy.get('#email').type('amandalops@gmail.com')
        cy.get('#password').type('123456')

        cy.submitForm('button', 'Criar conta')

        // Assert
        cy.contains('Conta criada com sucesso!').should('be.visible')
    })
})