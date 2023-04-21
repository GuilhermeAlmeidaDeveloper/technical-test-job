const url = window.location.href

function checkUrl(url) {

    if (url.indexOf('www.') !== -1 && url.indexOf('.com') !== -1) {

        if (url.includes('/home') || url === 'https://www.americanas.com.br/') {
            console.log('Você está na página: Home');
        } else if (url.includes('/categoria')) {
            console.log('Você está na página: Categoria');
        } else if (url.includes('/produto')) {
            console.log('Você está na página: Produto');
        } else {
            console.log('Você não está em nenhuma das páginas Home, Categoria, Produto');
        }

    }
    console.log('Você não está em um site válido');


}

checkUrl(url)

