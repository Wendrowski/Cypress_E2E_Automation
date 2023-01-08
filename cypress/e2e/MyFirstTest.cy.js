describe ('My First Test', () => {
    it('verify title-positive', () => {

        cy.visit("https://www.james-willett.com/gatling-load-testing-complete-guide/")
        cy.title().should('eq', 'Load Testing with Gatling - The Complete Guide | James Willett')
    })

    it('verify title-negative', () => {

        cy.visit("https://www.james-willett.com/gatling-load-testing-complete-guide/")
        cy.title().should('eq', 'Load Testing with Gatling - The Complete Guide | Games Willett')
    })
})