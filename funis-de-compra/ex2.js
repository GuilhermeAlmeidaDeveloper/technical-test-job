function printStep() {
    for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].pagetype) {
            console.log(`Você está navegando na etapa: ${dataLayer[i].pagetype}`);
            break
        }
    }
}
printStep();