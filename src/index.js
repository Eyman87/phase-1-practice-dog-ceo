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
        let breeds = Object.keys(results.message)
        breeds.forEach(breed => {
            const li = document.createElement("li")
            li.innerText = breed
            li.addEventListener("click", () => {
                li.style.color = "red";
            })
            dogBreeds.append(li);
        })
        const dropDown = document.getElementById("breed-dropdown")
        dropDown.addEventListener("change", (e) => {
            const result = breeds.filter(breed => breed.charAt(0) === e.target.value)
            while (dogBreeds.firstChild){
                dogBreeds.removeChild(dogBreeds.lastChild);
            }
            result.forEach(dog => {
                const newLi = document.createElement("li")
                newLi.innerText = dog
                newLi.addEventListener("click", () =>{
                    newLi.style.color = "red";
                })
                dogBreeds.append(newLi)
            })
        })
    })
}








