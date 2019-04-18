import { pokemon } from '../data/pokemon.js'

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    caption.textContent = pokeData.name
    if (pokeData.id !== 0) {
        //image.src = `/Portfolio-1/images/${pokeData.imageID}${pokeData.name}.png`
        image.src = pokeData.sprites.front_default
    } else {
        image.src = `../images/nebulus.png`
    }

    figure.appendChild(image)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
}

function cardBackInfo(pokeData) {
    let infoDiv = document.createElement('div')
    infoDiv.className = 'infoDiv'
    let moveOne = document.createElement('p')
    let moveTwo = document.createElement('p')
    let moveThree = document.createElement('p')
    let moveFour = document.createElement('p')
    moveOne.textContent = pokeData.moves[0].move.name
    moveTwo.textContent = pokeData.moves[1].move.name
    moveThree.textContent = pokeData.moves[2].move.name
    moveFour.textContent = pokeData.moves[3].move.name
    infoDiv.appendChild(moveOne)
    infoDiv.appendChild(moveTwo)
    infoDiv.appendChild(moveThree)
    infoDiv.appendChild(moveFour)
    return infoDiv
}

function cardBack(pokeData) {
    let cardBack = document.createElement('div')
    let backImage = document.createElement('img')
    backImage.className = 'backImage'
    backImage.src = `../images/pokeball.png`
    cardBack.className = 'card__face card__face--back'
    cardBack.appendChild(backImage)
    cardBack.appendChild(cardBackInfo(pokeData))
    return cardBack
}

function createPokeCard(pokeData) {
    let scene = document.createElement('div')
    scene.className = 'scene'
    let card = document.createElement('div')
    card.className = 'card'

    let type = pokemon.types[0].type.name
    switch (type) {
        default:
            console.log("Unknown Pokemon Type")
            break;
        case 'poison':
            console.log("Poison")
            scene.classList.toggle('is-poison')
            break;
        case 'normal':
            console.log("Psychic")
            break;
        case 'fairy':
            console.log("Fairy")
            break;
        case 'electric':
            console.log("Electric")
            break;
        case 'grass':
            console.log("Grass")
            break;
        case 'fire':
            console.log("Fire")
            break;
        case 'fighting':
            console.log("Fighting")
            break;
        case 'water':
            console.log("Water")
            break;
        case 'flying':
            console.log("Flying")
            break;
    }

    card.appendChild(cardFront(pokeData))
    card.appendChild(cardBack(pokeData))

    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    })

    scene.appendChild(card)
    mainContainer.appendChild(scene)
    return scene
}

const allFetchedPokemon = []
const allPokeScenes = []

pokemon.forEach(singleMon => {
    fetch(singleMon.url)
        .then(function (response) {
            return response.json()
        })
        .then(function (myJson) {
            allFetchedPokemon.push(myJson)
            //allPokeScenes.push()
            createPokeCard(matchIdToImage(myJson))
        })
})

function matchIdToImage(aPokemon) {
    if (aPokemon.id === 0) {
        aPokemon.imageID = 0
    }
    if (aPokemon.id < 10) {
        aPokemon.imageID = "00" + aPokemon.id
    }
    if (aPokemon.id > 9 && aPokemon.id < 100) {
        aPokemon.imageID = "0" + aPokemon.id
    }
    if (aPokemon.id > 99) {
        aPokemon.imageID = aPokemon.id
    }
    if (aPokemon.name === "mr-mime") {
        aPokemon.name = "Mr_Mime"
    }
    let dash = aPokemon.name.indexOf('-')
    if (dash !== -1) {
        aPokemon.name = aPokemon.name.slice(0, dash)
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

class Pokemon {
    constructor(name) {
        this.id = 0,
            this.name = name,
            this.moves = [
                {
                    move: {
                        name: "roar-of-time",
                    }
                },
                {
                    move: {
                        name: "aura-sphere",
                    }
                },
                {
                    move: {
                        name: "extreme-speed",
                    }
                },
                {
                    move: {
                        name: "spectral-thief",
                    },

                },
            ]
    }
}

const mysteryButton = document.querySelector('#mystery')
const selectPokemonButton = document.querySelector('#fetchPokemon')
const pokeTypeButton = document.querySelector('#poison')

mysteryButton.addEventListener('click', function () {
    createPokeCard(matchIdToImage(new Pokemon('Nebulus')))
})

selectPokemonButton.addEventListener('click', function () {
    let pokemonID = prompt('Enter an ID of an existing Pokemon:')
    fetchSinglePokemon(pokemonID)
})

// const poisonTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "poison")
// const flyingTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "flying")
// const normalTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "normal")
// const fireTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "fire")
// const waterTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "water")
// const grassTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "grass")
// const electricTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "electric")
// const groundTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "ground")
// const psychicTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "psychic")
// const rockTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "rock")
// const iceTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "ice")
// const bugTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "bug")
// const dragonTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "dragon")
// const ghostTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "ghost")
// const darkTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "dark")
// const steelTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "steel")
// const fairyTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "fairy")


pokeTypeButton.addEventListener('click', function () {
    console.log("You clicked on the poison button.")
    console.log(allPokeScenes)
})