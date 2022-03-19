console.log('%c HI', 'color: firebrick')

function ceo() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImg(json))

}

function renderImg(images) {
    const loc = document.querySelector('div')
    images.message.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
       loc.appendChild(img)
    });
}



document.addEventListener('DOMContentLoaded', () => {
    ceo()
})

