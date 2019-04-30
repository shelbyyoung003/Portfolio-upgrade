import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const democrats = representatives.filter(senator => {
  return senator.party === 'D'
})

const republicans = representatives.filter(senator => senator.party === 'R')

const simpleReps = representatives.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account,
  }
})


const allVotes = representatives.reduce((acc, rep) => {
  return acc + rep.total_votes
}, 0)

const allMissedVotes = representatives.reduce((acc, rep) => {
  return acc + rep.missed_votes
}, 0)



const senWithPics = senators.map(senator => {
  senator.imgURL = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  return senator
})
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