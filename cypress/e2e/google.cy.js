describe ('googleTest', () => {
    it ('google', () => {
        cy.visit("https://google.com/")
        cy.get('.gLFyf').type('British Cat').type('{enter}')    
        cy.get('[href="https://en.wikipedia.org/wiki/British_Shorthair#Description"]').click() 
    })  
})


