import puppeteer from "puppeteer";
import fs from "fs";
import { match } from "assert";

const url = "https://cinematek.be/programma/kalender";

const main = async () => {
	const browser = await puppeteer.launch({
		// headless: true,
		// defaultViewport: null,
	});
	const page = await browser.newPage();
	await page.goto(url);

	console.log("launch");

	const CineData = await page.evaluate(() => {
		const CineCard = Array.from(document.querySelectorAll(".py-1"));

		const regex_color = /⁄([^⁄]+)⁄/;

		const regex_timeMovie = /⁄([^⁄]+)⁄([^⁄]+)⁄/;

		const regex_subtitles = /⁄(?:[^⁄]+⁄){2}([^⁄]+)/;
		// const match_color = querySelector(".small.film__details")?.innerText.match(regex_color);
		const data = CineCard.map((film) => ({
			title: film.querySelector(".film__title.film__titles").textContent.split("\u2044")[0],

			time: film.querySelector(
				"div.col-12.col-md-2.d-flex.justify-content-between.flex-md-column.flex-row.align-self-center h4.screening__time",
			).innerText,
			date: film.getAttribute("data-date"),
			piano: film.getAttribute("data-piano"),
			location: film.querySelector(
				"div.col-12.col-md-2.d-flex.justify-content-between.flex-md-column.flex-row.align-self-center p span.badge.icon.screening__location",
			).innerText,
			// details: film.querySelector(".small").innerText,

			details_color: film.querySelector(".small.film__details")?.innerText.match(regex_color)?.[1].trim() || undefined,

			details_timeMovie:
				film.querySelector(".small.film__details")?.innerText.match(regex_timeMovie)?.[2].trim() || undefined,
			details_subtitles:
				film.querySelector(".small.film__details")?.innerText.match(regex_subtitles)?.[1].trim() || undefined,
			director: film.querySelector(".film__directors")?.innerText.split(",")[0] || undefined,
			year: film.querySelector(".film__directors")?.innerText.slice(-4) || undefined,
			cast: film.querySelector(".film__cast")?.innerText.replace(/^, /, "") || undefined,
		}));
		return data;
	});
	console.log(CineData);
	await browser.close();
	fs.writeFile("cine_data.json", JSON.stringify(CineData), (err) => {
		if (err) throw err;
		console.log("Success boys & girls");
	});
};
main();
