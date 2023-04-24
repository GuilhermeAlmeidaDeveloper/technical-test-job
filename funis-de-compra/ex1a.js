function productStep() {
    let itensLength = 0;
    let productIDs = [];
    let produtos = [];

    for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].ecommerce) {
            produtos = dataLayer[i].ecommerce.impressions;
        };
    };
    for (const produto of produtos) {
        productIDs.push(produto.id);
    }
    itensLength = produtos.length;
    console.log(`Lista de ID's dos produtos exibidos: ${productIDs.toLocaleString()}`);
    console.log(`Total de itens exibidos: ${itensLength}`);
};
productStep();