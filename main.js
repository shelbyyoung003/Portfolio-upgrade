import { people } from './people.js'

let nameElement = document.querySelector(".name")
let genderElement = document.querySelector(".gender")

nameElement.textContent = people[4].name
genderElement.textContent = people[4].gender

console.log(people);