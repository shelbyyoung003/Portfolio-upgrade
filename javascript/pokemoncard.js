import { pokemon } from "../data/pokemon.js"

class Pokemon {
  constructor(name) {
    this.id = 0,
      this.name = name
  }

}

let newPokemon = new Pokemon("MysteryMon")


const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
  let infoContainer = document.createElement('div')
  infoContainer.className = "card_face card_face--back"

  let card = document.createElement('div')
  card.className = 'box card'
  let figure = document.createElement('figure')
  figure.className = 'card_face'
  let caption = document.createElement('figcaption')
  let image = document.createElement('img')


  let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
  caption.textContent = upperName
  if (pokeData.id !== 0) {
    //image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
    image.src = pokeData.sprites.front_default
  } else {
    image.src = "../images/pokeball.png"
  }

  card.addEventListener('click', function () {
    card.classList.toggle("is-flipped")
  })

  figure.appendChild(image)
  figure.appendChild(caption)
  card.appendChild(figure)
  card.appendChild(infoContainer)
  mainContainer.appendChild(card)
}

pokemon.forEach((singleMon) => {
  fetch(singleMon.url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      createPokeCard(matchIdToImage(myJson));
    })
})

function matchIdToImage(aPokemon) {
  if (aPokemon.id < 10) {
    aPokemon.imageID = "00" + aPokemon.id
  }
  if (aPokemon.id > 9 && aPokemon.id < 100) {
    aPokemon.imageID = "0" + aPokemon.id
  }
  if (aPokemon.id > 99) {
    aPokemon.imageID = aPokemon.id
  }
  aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
  return aPokemon
}

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function (response) {
      return response.json()
    })
    .then(function (retrievedPokemon) {
      createPokeCard(matchIdToImage(retrievedPokemon))
    })
}

const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function () {
  let newPokeName = prompt('Enter the name of your new Pokemon.')
  createPokeCard(new Pokemon(newPokeName))
})

//console.log(pokemon)