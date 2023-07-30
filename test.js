import { ACCESS } from "./apikey.js";

//
const urlPoster = "https://www.themoviedb.org/t/p/w1280";
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${ACCESS}`,
	},
};

//
let movie_name = "les communiants";
let movie_year = 1963;
fetch(`https://api.themoviedb.org/3/search/movie?query=${movie_name}&primary_release_year=${movie_year}`, options)
	.then((response) => response.json())
	.then((response) => {
		console.log(response.results[0]);
		let data = response.results[0];
		if (data.original_title != movie_name) {
			console.log(data.original_title);
		}
		posterShow(data);
	})
	.catch((err) => console.error(err));

const posterShow = (data) => {
	let poster = document.createElement("img");
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
	fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/credits?language=en-US", options)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
};
