import { elements as el } from "./elements"

class Cart {
    validarProdutoPresenteNoCarrinho(name){
        cy.contains(name).should('be.visible')
        cy.screenshot('Produto Adicionado')
    }
}

export default new Cart ()