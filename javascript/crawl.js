import { films } from '../data/films.js'

const numStars = 100;

for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    const xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}

function getRandomPosition() {
    const y = window.innerWidth;
    const x = window.innerHeight;
    const randomX = Math.floor(Math.random()*x);
    const randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

const crawl = document.querySelector('.crawl')

films.sort ((a, b) => (a.episode_id > b.episode_id) ? 1 : -1)

films.forEach(film => {
    let title = document.createElement('div')

    let titleElement = document.createElement('h1')
    title.appendChild(titleElement)
    titleElement.textContent = film.title
    
    let crawlElement = document.createElement('div')
    title.appendChild(crawlElement)
    crawlElement.textContent = film.opening_crawl

    crawl.appendChild(title)
})