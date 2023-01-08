class Login {
    setUsername(username) {
        cy.get("input[placeholder='Username']").type(username)
    }
    setPassword(password) {
        cy.get("input[placeholder='Password']").type(password)
    }
    clickElement() {
        cy.get("button[type='submit']").click()
    }
    verifyLogin() {
        cy.get(".oxd-main-menu-item.active").should('have.text', 'Dashboard')
    }
}
export default Login