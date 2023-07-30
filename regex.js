const text = "⁄ V: FR ⁄ kleur ⁄ 95' ⁄ OND:&nbsp;—";

// Regular expression to match the string between the first and second forward slashes
const regex1 = /⁄([^⁄]+)⁄/;
const match1 = text.match(regex1);
if (match1) {
	const result1 = match1[1];
	console.log(result1); // Output: kleur
}

// Regular expression to match the string between the second and third forward slashes
const regex2 = /⁄([^⁄]+)⁄([^⁄]+)⁄/;
const match2 = text.match(regex2);
if (match2) {
	const result2 = match2[2];
	console.log(result2); // Output: 82'
}

// Regular expression to match the string after the third forward slash
const regex3 = /⁄(?:[^⁄]+⁄){2}([^⁄]+)/;
const match3 = text.match(regex3);
if (match3) {
	const result3 = match3[1];
	console.log(result3); // Output: OND: FR - NL
}

// const text = "⁄ kleur ⁄ 82' ⁄ OND: FR - NL";

// // Regular expression to match the string between the first and second forward slashes
// const regex_color = /⁄([^⁄]+)⁄/;

// const regex_timeMovie = /⁄([^⁄]+)⁄([^⁄]+)⁄/;

// const regex_subtitles = /⁄(?:[^⁄]+⁄){2}([^⁄]+)/;

const texty = "Les Communiants ⁄ De avondmaalsgasten ⁄ Nattvardsgasterna";
const labi = texty.split("\u2044")[0];
console.log(labi);

const texti = "only keep the text before / in this string";
let resulti = texti.split(" /")[0];
console.log(resulti);
