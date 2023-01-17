describe ('Handling Dropdowns', () => {

    it.skip('Dropdown with Select', () => {
        
        cy.visit('https://zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value', 'Italy') // assert the value presents
    })
    it ('Dropdown without select', () => {
        cy.visit('https://dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text', 'Italy')
    })
})