import { pokemon } from "../data/pokemon.js"

class Pokemon {
  constructor(name) {
    this.id = 0,
    this.name = name
  }

}

let newPokemon = new Pokemon(80, "MysteryMon")

pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(myJson);
    createPokeCard(myJson);
  });
})


  const mainContainer = document.querySelector('.container')

  function createPokeCard(pokeData) {
      let card = document.createElement('div')
      card.className = 'box'
      let figure = document.createElement('figure')
      let caption = document.createElement('figcaption')
      let image = document.createElement('img')


      let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
      caption.textContent = upperName 
      if(pokeData.id !== 0) {
        //image.src = `../media/${pokeData.id}${upperName}.png`
      } else {
        image.src = "../media/pokeball.PNG"
      }
      figure.appendChild(image)
      figure.appendChild(caption)
      card.appendChild(figure)
      mainContainer.appendChild(card)
  }

  const newPokemonButton = document.querySelector('button')

  newPokemonButton.addEventListener('click', function() {
    let newPokeName = prompt('Enter the name of your new Pokemon.')
    createPokeCard(new Pokemon(newPokeName))
  })

//console.log(pokemon)