function categoryStep() {
    let itensLength = 0
    let productIDs = []

    for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].ecommerce) {
            const products = dataLayer[i].ecommerce.impressions
            itensLength += products.length
            for (let product of products) {
                productIDs.push(product.id)
            };

        }
    }
    console.log(`Lista de ID's dos produtos exibidos: ${productIDs.toLocaleString()}`);
    console.log(`Total de itens exibidos: ${itensLength}`);
}

categoryStep()