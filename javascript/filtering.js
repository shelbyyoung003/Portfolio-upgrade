import { pokemon } from '../data/pokemon.js'

pokemon.forEach(singleMon => {
    fetch(singleMon.url)
        .then(function (response) {
            return response.json()
        })
        .then(function (myJson) {
            createPokeCard(matchIdToImage(myJson))
        })
})