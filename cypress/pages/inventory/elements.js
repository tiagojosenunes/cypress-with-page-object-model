export const elements = {
    addToCartButton:(itemName) => `[data-test="add-to-cart-${transform(itemName)}"]`,
    removeFromCartButton:(itemName) => `[data-test="remove-${transform(itemName)}"]`,
    inventoryUrl: 'https://www.saucedemo.com/inventory.html',
}

function transform(texto){
    return texto.replaceAll(' ', '-').toLowerCase()
}