async function loadImages(numeroAleatorio) {

    const req = await fetch('https://jsonplaceholder.typicode.com/photos')
    const json = await req.json()


    let album = json.filter((item) => {
        return item.albumId === numeroAleatorio
    })

    let images = album.map((album) => {
        return album.thumbnailUrl
    })



    console.log(album);
    console.log(images);



}

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

loadImages(numeroAleatorio)
