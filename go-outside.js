var raining = true;
var temperature = 12;


if (raining) {
  console.log("Don't forget your umbrella!");
} else {
    console.log('No umbrella is fine.');
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
    console.log('Short sleeves won\'t cut it!');
} else if (temperature >= 15) {
    console.log('Short sleeves are fine.');
}

console.log("Now you're ready to go outside!");