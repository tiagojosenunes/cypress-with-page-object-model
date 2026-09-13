import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"

describe('Carrinho', () => {

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
        Inventory.validarAcessoPagina()
    })

    it('Fluxo de adicionar no carrinho', () => {
        const qntdItensAdicionados = 1
        // Act
        Inventory.adicionarAoCarrinho('Sauce Labs Backpack')
        Header.validarQueCarrinhoPossuiItens(qntdItensAdicionados)
        Header.navegarParaCarrinho()
        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')
    })

    it('Fluxo de remover do carrinho', () => {
        Inventory.adicionarAoCarrinho('Sauce Labs Backpack')
        Inventory.removerDoCarrinho('Sauce Labs Backpack')
        Header.validarQueCarrinhoNaoPossuiItens()
    })
})