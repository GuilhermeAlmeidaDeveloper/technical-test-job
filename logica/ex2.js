const aleatoryNumber = Math.floor(Math.random() * 100) + 1;

async function loadImages() {
    const req = await fetch('https://jsonplaceholder.typicode.com/photos');
    const json = await req.json();
    const albumItens = json.filter((item) => item.albumId === aleatoryNumber);
    console.log(albumItens);
}
loadImages();
