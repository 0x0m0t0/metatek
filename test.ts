import { ACCESS } from './apikey';

//
const urlPoster = 'https://www.themoviedb.org/t/p/w1280';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS}`,
  },
};

//
let movie_name = 'Beaches of Agnès';
fetch(`https://api.themoviedb.org/3/search/movie?query=${movie_name}&include_adult=false`, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    let data = response.results[0];
    posterShow(data);
  })
  .catch((err) => console.error(err));

const posterShow = (data) => {
  let poster = document.createElement('img');
  poster.src = urlPoster + data.poster_path;
  document.body.prepend(poster);
  console.log(data);
  console.log(data.id);
  console.log(data.title);
  console.log(data.genre_ids);
  console.log(data.original_language);
  console.log(data.original_title);
  console.log(data.overview);
  console.log(data.release_date);

  let movie_id = data.id;
  console.log(movie_id);
  fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?language=en-US', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
