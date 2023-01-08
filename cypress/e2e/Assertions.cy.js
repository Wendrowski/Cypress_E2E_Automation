describe ('Assertions Demo', () => {

    it ('Implicit Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrm')

       /* cy.url().should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrm') */

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'greenhrm')
        
        cy.title().should('include', 'HRM')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        /* cy.get('.orangehrm-login-branding > img').should(be.visible)
        cy.get('.orangehrm-login-branding > img').should(exist) */

        cy.get('.orangehrm-login-branding > img').should('be.visible') // Logo visible or not
        .and('exist') // Logo exists or not
 
        cy.xpath('//a').should('have.length', '5') //Num of links on page

        cy.get("input[placeholder='Username']").type('Admin') //provide a value into the input box
        .and('have.value', 'Admin')
    })

    it ('Explicit Assertions', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then( (x) => {

                let actName = x.text()
                // BDD Style Assertions
                expect(actName).to.equal(expName)      
                expect(actName).to.not.equal(expName)   
                
                // TDD Style Assertions
                assert.equal(actName, expName)
                assert.notEqual(actName, expName)
        })
    })
})