function createElementList() {
    const NodeListElements = document.querySelectorAll(".js-productClick");
    const allElementsArray = Array.from(NodeListElements);
    const elementsSelectedList = allElementsArray.filter((item) => {
        if (item.title && item.dataset.productSku % 3 === 0) {
            return item
        }
    })
    console.log(elementsSelectedList);
}

createElementList()