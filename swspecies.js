import { species } from './species.js'
import { planets } from './planets.js'

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/'){
        start++
    }
    return url.slice(start, end)
}

const allHomeWorlds = species.map(species => {
    let foundWorld = planets.find(planet => {
        return planet.url === species.homeworld
    })
    return {
        name: species.name,
        home: foundWorld.name,
    }
})

console.log(allHomeWorlds);

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

const mammal = species.filter(species => species.classification === "mammal");
const reptile = species.filter(
    species => (species.classification === "reptile") ||
    (species => species.classification === "reptilian") ||
    (species => species.classification === "sentient")); // Classification and Designation were switched for the Rodian
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
    let planetElement = document.createElement('p')
    name.textContent = mammal.name
    classification.textContent = mammal.classification
    planetElement.textContent = mammal.home
    specDiv.appendChild(name)
    specDiv.appendChild(classification)
    specDiv.appendChild(homeworld)

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