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

const allHomeWorlds = species.map(spec => {
    let foundWorld = planets.find(planet => {
        return planet.url === spec.homeworld
    })
    let imageURL = getLastNumber(spec.url)
    return {
        name: spec.name,
        imagePath: `https://starwars-visualguide.com/assets/img/species/${imageURL}.jpg`
    }
})

// Reference Image URL: https://starwars-visualguide.com/assets/img/species/5.jpg


const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((spec) => {
    let specElement = document.createElement('div')
    let planetElement = document.createElement('p')
    let imageElement = document.createElement('img')

    specElement.className = 'box'
    specElement.textContent = spec.name
    planetElement.textContent = spec.home
    imageElement.src = spec.imagePath

    specElement.appendChild(planetElement)
    specElement.appendChild(imageElement)
    mainContainer.appendChild(specElement)
})

document.body.appendChild(mainContainer)

//  const mainContainer = document.createElement('div')
//  mainContainer.className = 'container'

//  allHomeWorlds.forEach((species) => {
//     let specDiv = document.createElement('div')
//     let planetElement = document.createElement('p')
//     let imageElement = document.createElement('img')

//     imageElement.src = species.imagePath

//     specDiv.appendChild(imageElement)
//  })

// const mammal = species.filter(species => species.classification === "mammal");
// const reptile = species.filter(
//     species => (species.classification === "reptile") ||
//     (species => species.classification === "reptilian") ||
//     (species => species.classification === "sentient")); // Classification and Designation were switched for the Rodian
// const amphibian = species.filter(species => species.classification === "amphibian");
// const other = species.filter(
//     species => (species.classification === "unknown") ||
//     (species => species.classification === "gastropod") ||
//     (species => species.classification === "artificial") ||
//     (species => species.classification === "insectoid"));


// const main = document.querySelector('.container')

// mammal.forEach(mammal => {
//     let specDiv = document.createElement('div')
//     specDiv.className = 'box'
//     let name = document.createElement('p')
//     let classification = document.createElement('p')
//     let imageElement = document.createElement('img')
    
//     name.textContent = mammal.name
//     classification.textContent = mammal.classification
//     imageElement.src = species.imagePath
    
//     specDiv.appendChild(name)
//     specDiv.appendChild(classification)
//     specDiv.appendChild(imageElement)

//     main.appendChild(specDiv)
// })

// reptile.forEach(reptile => {
//     let specDiv = document.createElement('div')
//     specDiv.className = 'box'
//     let name = document.createElement('p')
//     let classification = document.createElement('p')
//     name.textContent = reptile.name
//     classification.textContent = reptile.classification
//     specDiv.appendChild(name)
//     specDiv.appendChild(classification)

//     main.appendChild(specDiv)
// })

// amphibian.forEach(amphibian => {
//     let specDiv = document.createElement('div')
//     specDiv.className = 'box'
//     let name = document.createElement('p')
//     let classification = document.createElement('p')
//     name.textContent = amphibian.name
//     classification.textContent = amphibian.classification
//     specDiv.appendChild(name)
//     specDiv.appendChild(classification)

//     main.appendChild(specDiv)
// })

// other.forEach(other => {
//     let specDiv = document.createElement('div')
//     specDiv.className = 'box'
//     let name = document.createElement('p')
//     let classification = document.createElement('p')
//     name.textContent = other.name
//     classification.textContent = other.classification
//     specDiv.appendChild(name)
//     specDiv.appendChild(classification)

//     main.appendChild(specDiv)
// })

// Background Details

const numStars = 100;

for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    const xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}

function getRandomPosition() {
    const y = window.innerWidth;
    const x = window.innerHeight;
    const randomX = Math.floor(Math.random()*x);
    const randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}