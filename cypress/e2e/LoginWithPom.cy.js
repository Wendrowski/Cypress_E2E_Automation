import Login from "../PageObjects/LoginPage2.js"

describe ('Login With POM', () => {
    // General approach
    it ('Login Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
    })
    // Using POM
    it('Login Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        const loginInstance = new Login()

        loginInstance.setUsername('Admin')
        loginInstance.setPassword('admin123')
        loginInstance.clickElement()
        loginInstance.verifyLogin()
    })
    // Using POM with fixtures
    it.only('Login Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.fixture('orangehrm.json').then((data) => {

            const loginInstance = new Login()

            loginInstance.setUsername(data.username)
            loginInstance.setPassword(data.password)
            loginInstance.clickElement()
            loginInstance.verifyLogin()
        })
  
    })
})