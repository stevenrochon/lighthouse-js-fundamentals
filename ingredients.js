var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

for (i = 0 ; i < ingredients.length ; i++) {
    console.log(ingredients[i]);
}

var counter = 0;
while (counter < ingredients.length) {
    console.log(ingredients[counter]);
    counter++;
}

for (i = ingredients.length ; i > 0 ; i--) {
    console.log(ingredients[i-1]);
}