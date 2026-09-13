import Login from '../pages/login'
import Inventory from '../pages/inventory'

describe ('Login',() => {

    beforeEach(() => {
        Login.visitarPagina()
    })

    it('Realizar login com sucesso', () => {     
        // Act
        Login.preencherCredenciaisValidas()
        // Assert
        Inventory.validarAcessoPagina()
    })
    
    it('Realizar login com credenciais invalidas', () => {
        // Act
        Login.preencherCredenciaisInvalidas()
        // Assert
        Login.validarErroCredenciaisInvalidas()
    })
})