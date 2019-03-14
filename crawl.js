import { films } from './films.js'

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

const main = document.querySelector('buttons')

const opCrawl = films.filter(films => films.opening_crawl)

opCrawl.forEach(films => {
    let crawlDiv = document.createElement('div')
    crawlDiv.filmName = 'box'
    let opening_crawl = createElement('p')
    title.textContent = film.title
    opening_crawl.textContent = film.opening_crawl
    crawlDiv.appendChild(title)
    crawlDiv.appendChild(opening_crawl)


})