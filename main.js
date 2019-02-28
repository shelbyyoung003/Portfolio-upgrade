import { people } from './people.js'

/*let nameElement = document.querySelector(".name")
let genderElement = document.querySelector(".gender")

nameElement.textContent = people[4].name
genderElement.textContent = people[4].gender

const intro = document.querySelector(".intro")

const sorted = name.sort((a, b) => (a.name_id > b.name_id) ?  1: -1

.people.forEach(people =>{
let tile = document.createElement('div')
let nameElement = document.createElement('h1')
intro.appendChild(nameElement)
nameElement.textContent = people.name

let genderElement = document.createElement('h2')
intro.appendChild(genderElement)
genderElement.textContent = people.gender

intro.appendChild(tile)
}))*/

const men = people.filter(person => person.gender === "male");
const women = people.filter(person => person.gender === "female");
const other = people.filter(person => person.gender === "n/a") | (person => person.gender === "none") | (person => person.gender === "hermaphrodite");
console.log(other);