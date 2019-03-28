import { species } from '../data/species.js'
import { planets } from '../data/planets.js'

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/'){
        start++
    }
    return url.slice(start, end)
}

const allClassification = species.map(spec => {
    let foundClass = species.find(spec => {
        return spec.classification
    })
    let imageURL = getLastNumber(spec.url)
    return {
        name: spec.name,
        classification: foundClass.classification,
        imagePath: `https://starwars-visualguide.com/assets/img/species/${imageURL}.jpg`
    }
})

const mammal = species.filter(spec => spec.classification === "mammal");
const reptile = species.filter(
    spec => (spec.classification === "reptile") ||
    (spec => spec.classification === "reptilian") ||
    (spec => spec.classification === "sentient")); // Classification and Designation were switched for the Rodian
const amphibian = species.filter(spec => spec.classification === "amphibian");
const other = species.filter(
    spec => (spec.classification === "unknown") ||
    (spec => spec.classification === "gastropod") ||
    (spec => spec.classification === "artificial") ||
    (spec => spec.classification === "insectoid"));

// Reference Image URL: https://starwars-visualguide.com/assets/img/species/5.jpg


const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allClassification.forEach((spec) => {
    let specElement = document.createElement('div')
    let imageElement = document.createElement('img')

    specElement.className = 'box'
    specElement.textContent = spec.name
    imageElement.src = spec.imagePath

        
    specElement.appendChild(imageElement)
    mainContainer.appendChild(specElement)
})

document.body.appendChild(mainContainer)

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