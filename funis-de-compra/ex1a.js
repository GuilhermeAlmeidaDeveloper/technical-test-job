function productStep() {
    let itensLength = 0;
    let productIDs = [];
    let products = [];

    for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].ecommerce) {
            products = dataLayer[i].ecommerce.impressions;
        };
    };
    for (const product of products) {
        productIDs.push(product.id);
    }
    itensLength = products.length;
    console.log(`Lista de ID's dos produtos exibidos: ${productIDs.toLocaleString()}`);
    console.log(`Total de itens exibidos: ${itensLength}`);
};
productStep();