describe ('CSSLocators', () => {

    it('csslocators', () => {

        cy.visit("http://automationpractice.com/index.php")
        cy.get("#search_query_top").type("T-Shirts") //by id; tag is optional
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts")
        
           })







})