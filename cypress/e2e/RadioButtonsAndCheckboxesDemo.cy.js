describe ('Checking UI Elements', () => {

    it ('Check Radio Buttons', () => {
        // navigating to the URL
        cy.visit('https://itera-qa.azurewebsites.net/home/automation') 

        // checking visibility of the element
        cy.get('input#male').should('be.visible') 
        cy.get('input#female').should('be.visible') 

        // selecting radio buttons
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
    })

    it ('Checking checkboxes', () => {
        // navigating to the URL
        cy.visit('https://itera-qa.azurewebsites.net/home/automation') 
        
        // checking visibility of the element
        cy.get('#monday').should('be.visible') 

        // selecting single checkbox
        cy.get('#monday').check().should('be.checked')

        //unchecking the checkbox
        cy.get('#monday').uncheck().should('not.be.checked')

        // selecting allthe checkboxes
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // select the first checkbox
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        //selext the last checkbox
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})