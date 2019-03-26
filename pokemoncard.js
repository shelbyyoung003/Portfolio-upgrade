import { pokemon } from "./pokemon.js"

fetch('https://pokeapi.co/api/v2/pokemon/25/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    createPokeCard(myJson);
  });

  const mainContainer = document.querySelector('.container')

  function createPokeCard(pokedata) {
      let card = document.createElement('div')
      let name = document.createElement('p')

      name.textContent = pokedata.name
      card.appendChild(name)
      mainContainer.appendChild(card)
  }

//console.log(pokemon)