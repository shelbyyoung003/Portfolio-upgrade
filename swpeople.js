import { people } from './people.js'

const men = people.filter(person => person.gender === "male");
const women = people.filter(person => person.gender === "female");
const other = people.filter(
    (person => person.gender === "n/a") ||
    (person => person.gender === "none") ||
    (person => person.gender === "hermaphrodite"));

console.log(other);

const main = document.querySelector('.container')

men.forEach(man => {
    let manDiv = document.createElement('div')
    manDiv.className = 'box'
    let name = document.createElement('p')
    let eyeColor = document.createElement('p')
    name.textContent = man.name
    eyecolor.textContent = man.eye_color
    manDiv.appendChild(name)
    manDiv.appendChild(eyeColor)

    main.appendChild(manDiv)
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