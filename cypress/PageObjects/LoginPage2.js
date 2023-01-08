class Login {

    txtUserName = "input[placeholder='Username']"
    txtPassword = "input[placeholder='Password']"
    btnSubmit = "button[type='submit']"
    lableMsg = ".oxd-main-menu-item.active"

    setUsername(username) {
        cy.get(this.txtUserName).type(username)
    }
    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }
    clickElement() {
        cy.get(this.btnSubmit).click()
    }
    verifyLogin() {
        cy.get(this.lableMsg).should('have.text', 'Dashboard')
    }
}
export default Login