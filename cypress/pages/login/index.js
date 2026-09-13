import { elements as el } from "./elements"

class Login {

    visitarPagina(){
        cy.visit('https://www.saucedemo.com/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type('standard_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisInvalidas (){
        cy.get(el.username).type('invalido')
        cy.get(el.password).type('senha')
        cy.get(el.loginButton).click()
    }

    validarErroCredenciaisInvalidas () {
        cy.get(el.errorMessage).should('contain.text','Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('Bloqueio de acesso com credenciais inválidas')
    }
}
export default new Login ()