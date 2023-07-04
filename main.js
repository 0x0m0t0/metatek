import './main.scss';
import { test } from './test.ts';

test();
const fetchy = async (callback) => {
  let progData;
  await fetch('./json/cine.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      progData = data;
      callback(progData);
    })
    .catch((error) => {
      error = 'lol error';
      console.log(error);
    });
};

////

let section = document.createElement('section');
let sectionView = document.createElement('section');
sectionView.setAttribute('id', 'section-view');
let mainpart = document.querySelector('main');
mainpart.append(section);
mainpart.append(sectionView);
const cineProg = (movie) => {
  const main = document.querySelector('main');

  const section = document.querySelector('section');
  let movieCard = document.createElement('div');
  movieCard.setAttribute('class', 'movie-card');

  let topCard = document.createElement('div');
  topCard.setAttribute('class', 'top-card');

  let rightData = document.createElement('div');
  rightData.setAttribute('class', 'right-data');

  let figure = document.createElement('figure');
  figure.setAttribute('class', 'film-img');
  let filmImg = document.createElement('img');

  let bottomCard = document.createElement('div');
  bottomCard.setAttribute('class', 'bottom-card');

  let locationCard = document.createElement('div');
  locationCard.setAttribute('class', 'location');
  let locationP = document.createElement('p');
  let timeP = document.createElement('p');

  let uList = document.createElement('ul');
  let liEl = document.createElement('li');
  let movieTitle = document.createElement('h2');
  let movieDirector = document.createElement('h3');
  ////
  ////
  let descriptionP = document.createElement('p');
  descriptionP.innerText = movie.description;

  filmImg.src = movie.Poster;
  movieTitle.innerText = movie.title;
  movieDirector.innerText = movie.director;
  liEl.innerText = movie.genre;
  timeP.innerText = movie.time;
  locationP.innerText = movie.location;

  ////
  ////
  bottomCard.append(descriptionP);
  uList.append(liEl);
  rightData.append(uList);

  locationCard.append(locationP);
  locationCard.append(timeP);

  rightData.append(movieTitle);
  rightData.append(movieDirector);
  rightData.append(locationCard);

  figure.append(filmImg);
  topCard.append(figure);
  topCard.append(rightData);
  movieCard.append(topCard);
  movieCard.append(bottomCard);

  section.append(movieCard);

  filmImg.style = 'width:100%; auto: 100%;';
  topCard.style = 'display:flex';
  section.style = 'display:flex; flex-flow:row wrap';
  movieCard.style = 'display:flex;flex-flow:column wrap;';
};

fetchy((data) => {
  data.forEach((el) => {
    cineProg(el);
  });
});

// load json async later https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// Attribution tmdb to be used later

// let attribution = document.createElement('div');
// let imgAttr = document.createElement('img');

// imgAttr.style.maxHeight = '3em';
// imgAttr.src =
//   'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg';

// attribution.append(imgAttr);
// document.body.append(attribution);

// pwd.forEach((p) => {
//   p.setAttribute('value', 'submit');
//   p.setAttribute('minlength', '6');
// });
let prevClick = null;
let bigImg = document.querySelector('#section-view film-img');
setTimeout(() => {
  console.log('hello');
  let movieCard = document.getElementsByClassName('movie-card');
  // let white = setAttribute('class', 'white');
  // let red = setAttribute('class', 'red');
  // white.style = 'background:white; border: 2px solid blue;';
  Array.from(movieCard).forEach((movie) => {
    let poster = movie.getElementsByClassName('film-img');
    Array.from(poster).forEach((img) => {
      movie.addEventListener('click', (e) => {
        if (movie.className === 'movie-card') {
          e.currentTarget.classList.add('white');
          let current = img.cloneNode(true);
          current.setAttribute('class', 'big-img');
          sectionView.append(current);
          console.log(img.cloneNode(true));

          if (prevClick !== null && sectionView.childNodes !== null) {
            prevClick.classList.remove('white');

            bigImg.replaceWith(current);
          }
          console.log(sectionView.childNodes);
          bigImg = current;
          console.log(bigImg);
          prevClick = e.currentTarget;
          console.log(prevClick);
        }
      });
    });
  });
}, 200);
