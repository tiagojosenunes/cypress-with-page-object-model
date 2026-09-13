import { elements as el } from "./elements"

class Inventory {

    validarAcessoPagina () {
        cy.url().should('eq', el.inventoryUrl),
        cy.screenshot('Acesso página inventário')
    }

    adicionarAoCarrinho (itemName){
        // Act
        cy.get(el.addToCartButton(itemName)).click()
    }

    removerDoCarrinho (itemName){
        cy.get(el.removeFromCartButton(itemName)).click()
    }
}

export default new Inventory ()