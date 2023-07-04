import puppeteer from 'puppeteer';

import { Browser } from 'puppeteer';
import fs from 'fs';

console.log('test');

const url = 'https://cinematek.be/programma/kalender';

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(url);

  console.log('launch');

  const CineData = await page.evaluate(() => {
    const CineCard = Array.from(document.querySelectorAll('.py-1'));
    const data = CineCard.map((film) => ({
      title: film.querySelector(
        'div.col-12.col-md-8 div.film p.card-title span.lead.text-color.film__title.film__titles',
      ).textContent,

      time: film.querySelector(
        'div.col-12.col-md-2.d-flex.justify-content-between.flex-md-column.flex-row.align-self-center h4.screening__time',
      ).innerText,

      location: film.querySelector(
        'div.col-12.col-md-2.d-flex.justify-content-between.flex-md-column.flex-row.align-self-center p span.badge.icon.screening__location',
      ).innerText,
    }));
    return data;
  });
  console.log(CineData);
  await browser.close();
  fs.writeFile('cine_data.json', JSON.stringify(CineData), (err) => {
    if (err) throw err;
    console.log('Success boys & girls');
  });
};
main();
