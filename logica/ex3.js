const divsAreaList = document.querySelectorAll('.ad-area');
const divsAreaArray = Array.from(divsAreaList);

const url = window.location.href;
const splitUrl = url.split(".br/");
const urlResource = splitUrl[1];
const splitResource = urlResource.split("/");
const category = splitResource[0];

const divsNotFoundedMsg = 'não há div’s disponíveis na página';

function urlVerification() {

    if (url.includes('/home') || url === 'https://www.band.uol.com.br/') {
        console.log('Você está na categoria: Home');
        !divsAreaList ? console.log(divsNotFoundedMsg) : console.log(divsAreaArray);
    } else {
        console.log(`Você está na categoria: ${category}`);
        if (url.includes('/esportes')) {
            !divsAreaList ? console.log(divsNotFoundedMsg) : console.log(divsAreaArray);
        };
        if (url.includes('/entretenimento')) {
            !divsAreaList ? console.log(divsNotFoundedMsg) : console.log(divsAreaArray);
        };
        if (url.includes('/noticias')) {
            !divsAreaList ? console.log(divsNotFoundedMsg) : console.log(divsAreaArray);
        };
    }
};
urlVerification();