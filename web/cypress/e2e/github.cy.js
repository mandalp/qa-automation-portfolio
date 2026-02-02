import profilesData from "../fixtures/githubProfiles.json"

describe('Management of GitHub repositories', () => {
    // campos obrigatórios
    // buscar perfil do github

    beforeEach(() => {
        // Arrange
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('should add a new GitHub profile', () => {
        //const profile = profilesData.profiles[0]
        profilesData.profiles.forEach(profile => {
            // Act
            cy.fillGithubForm(profile)
            cy.submitForm('button', 'Adicionar Perfil')

            // Assert
            cy.validateGithubProfileInTable(profile.username, profile.name, profile.profile)
        })
    })

    it('should delete a GitHub profile', () => {
        const profile = profilesData.profiles[1]
        // Act
        cy.fillGithubForm(profile)
        cy.submitForm('button', 'Adicionar Perfil')

        cy.removeGithubProfileFromTable(profile.username)

        // Assert
        cy.validateGithubProfilenotInTable(profile.username)
 
    })

    it('should verify if a GitHub profile is opened in a new tab', () => {
        const profiles = profilesData.profiles

        const randomIndex = Math.floor(Math.random() * profiles.length)
        const profile = profiles[randomIndex]

        // Act
        cy.fillGithubForm(profile)
        cy.submitForm('button', 'Adicionar Perfil')

        // Assert
        cy.openGithubProfileInNewTab(profile.username)
    })

})
