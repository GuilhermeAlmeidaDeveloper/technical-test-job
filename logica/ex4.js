const signImage = document.querySelectorAll('.horoscope-info');
const signsText = document.querySelectorAll('.sign-name');

signImage.forEach(sign => {
    sign.addEventListener('click', () => {
        const dataId = sign.dataset.id;
        alert(`Você clicou no signo de: ${dataId}`);
    });
});

signsText.forEach(sign => {
    sign.addEventListener('click', () => {
        const signName = sign.textContent;
        alert(`Você clicou no signo de: ${signName}`);
    });
});