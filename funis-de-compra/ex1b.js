function cartStep() {
    let productIDs = []
    let cartValue = 0

    for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].product) {
            let cart = dataLayer[i].product;
            for (product of cart) {
                productIDs.push(product.id);
                cartValue += product.price
            }
        }
    }
    console.log(`Lista de ID's dos produtos que estão no carrinho: ${productIDs.toLocaleString()}`);
    console.log(`Valor a ser pago: R$${cartValue.toFixed(2)} + Frete`);
}
cartStep()