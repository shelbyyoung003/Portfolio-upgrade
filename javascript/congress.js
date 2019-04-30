import { senators } from './senators.js'
import { representatives } from './representatives.js'

// filter examples

const democrats = representatives.filter(senator => {
  return senator.party === 'D'
})

const republicans = representatives.filter(senator => senator.party === 'R')

console.log(democrats, republicans)

// map example - simplify the object returned from the map function by just creating two properties for each one

const simpleReps = representatives.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account,
  }
})

// reduce example

const testArray = [5, 10, 15, 20, 25, 30, 35, 40]

const testResults = testArray.reduce((acc, num) => {
  return acc + num
}, 0)

const allVotes = representatives.reduce((acc, rep) => {
  return acc + rep.total_votes
}, 0)

const allMissedVotes = representatives.reduce((acc, rep) => {
  return acc + rep.missed_votes
}, 0)

// should provide some nice UI to show these results instead of just printing to the console
console.log(testResults, allVotes, allMissedVotes)

const senWithPics = senators.map(senator => {
  senator.imgURL = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  return senator
})

// now set up some UI elements to display the senator pictures
  let pictureDiv = document.querySelector('.container')

  senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    let senatorCap = document.createElement('figcaption')
    senatorCap.textContent = `${senator.first_name} ${senator.last_name}`
    senatorPic.src = senator.imgURL
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
  })