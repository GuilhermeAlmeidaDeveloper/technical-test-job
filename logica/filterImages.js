async function loadImages() {

    let req = await fetch('https://jsonplaceholder.typicode.com/photos')
    let json = await req.json()


    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;


    let album = json.filter((item) => {
        return item.albumId === numeroAleatorio
    })

    let images = album.map((album) => {
        return album.thumbnailUrl
    })

    console.log(images);



}



loadImages()