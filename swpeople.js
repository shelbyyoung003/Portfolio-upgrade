import { species } from './species.js'

const mammal = species.filter(species => species.classification === "mammal");
const reptile = species.filter(
    species => (species.classification === "reptile") ||
    (species => species.classification === "reptilian") ||
    (species => species.classification === "sentient"));
const amphibian = species.filter(species => species.classification === "amphibian");
const other = species.filter(
    species => (species.classification === "unknown") ||
    (species => species.classification === "gastropod") ||
    (species => species.classification === "artificial") ||
    (species => species.classification === "insectoid"));


const main = document.querySelector('.container')

mammal.forEach(mammal => {
    let specDiv = document.createElement('div')
    specDiv.className = 'box'
    let name = document.createElement('p')
    let classification = document.createElement('p')
    name.textContent = mammal.name
    classification.textContent = mammal.classification
    specDiv.appendChild(name)
    specDiv.appendChild(classification)

    main.appendChild(specDiv)
})

reptile.forEach(reptile => {
    let specDiv = document.createElement('div')
    specDiv.className = 'box'
    let name = document.createElement('p')
    let classification = document.createElement('p')
    name.textContent = reptile.name
    classification.textContent = reptile.classification
    specDiv.appendChild(name)
    specDiv.appendChild(classification)

    main.appendChild(specDiv)
})

amphibian.forEach(amphibian => {
    let specDiv = document.createElement('div')
    specDiv.className = 'box'
    let name = document.createElement('p')
    let classification = document.createElement('p')
    name.textContent = amphibian.name
    classification.textContent = amphibian.classification
    specDiv.appendChild(name)
    specDiv.appendChild(classification)

    main.appendChild(specDiv)
})

other.forEach(other => {
    let specDiv = document.createElement('div')
    specDiv.className = 'box'
    let name = document.createElement('p')
    let classification = document.createElement('p')
    name.textContent = other.name
    classification.textContent = other.classification
    specDiv.appendChild(name)
    specDiv.appendChild(classification)

    main.appendChild(specDiv)
})



/* const foundPlanet = (arr, planetUrl) => {
    const foundIt = {}
    arr.find((element) => {
        if (element.homeworld === planetURL) {
            foundIt = element
        }
    })
}

console.log(foundPlanet(men, "https://swapi.co/api/planets/1/")) */