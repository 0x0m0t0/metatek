const sfetchy = async (callback) => {
  await fetch('./cine_data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      callback(data);
      // data.forEach((el) => {
      //   console.log(el);
      // });
    })
    .catch((error) => {
      error = 'lol error';
      console.log(error);
    });
};

let film = "Beaches of Agnes / Plages d'Agnes";
let str = film.split('/')[0];
console.log(str);
let dir = 'Apichatpong&nbsp;Weerasethakul, thailand, Frankrijk, Duitsland, Italië 2004';
let stra = dir.split(',')[0];
let stro = dir.slice(-4);
let director = stra.replace(/&nbsp;/g, ' ');
console.log(stra);
console.log(stro);
console.log(director);

sfetchy((data) => {
  let cleanData = data.map((item) => {
    const container = {};
    let title = item.title.split('/')[0];
    console.log(title);
    container['title'] = title;

    return container;
  });
  console.log(cleanData);
});

// sfetchy((data) => {
//   data.forEach((el) => {
//     console.log(el);
//   });
// });
// { title: "They Live", time: "19:00", date: "20230831", piano: null, location: "ledoux", director: "⁄ kleur ⁄ 94' ⁄ OND: NL" }
