const signs = document.querySelectorAll('.sign-name');
signs.forEach(sign => {
    sign.addEventListener('click', function showSign() {
        const signName = sign.textContent;
        alert(`Você clicou no signo de: ${signName}`);
    });
});
