console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    (loadImages(), addBreeds())
})

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        console.log("response", results.message)
        const dogImageContainer = document.getElementById("dog-image-container")
        results.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            dogImageContainer.append(img)
        })
    })
}


function addBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {
        console.log("response", results.message)
        const dogBreeds = document.getElementById("dog-breeds")
        results.message.keys(breed => {
            console.log(results.message)
            const li = document.createElement("li")
            li.src = breed.key
            dogBreeds.append(li)
        })
    })
}

