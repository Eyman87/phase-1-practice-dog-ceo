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
        const dogBreeds = document.getElementById("dog-breeds")
        let breed = Object.keys(results.message)
        breed.forEach(breed => {
        //     console.log(results.message)
            const li = document.createElement("li")
            li.innerText = breed
            li.addEventListener("click", () => {
                li.style.color = "red";
            })
            dogBreeds.append(li);
        })
        const dropDown = document.getElementById("breed-dropdown")
        // 1. filter out none "a" dogs
        const filterBy = "a"
        // console.log("first breed", breed[0])
        // console.log("first letter", breed[0].charAt(0))
        const result = breed.filter(breed => breed.charAt(0) === filterBy)
            // how to see the first letter of string only to compare to filterBy if === then true otherwise 

        // let drop = Object.keys(results.message)
        // drop.forEach(drop => {
        //     const value = document.createElement()
        // })
    })
}








