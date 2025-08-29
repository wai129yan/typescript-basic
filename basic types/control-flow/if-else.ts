let weather = "sunny";
if (weather === "snowy") {
  console.log("It's snowy outside!");
} else if (weather === "rainy") {
  console.log("It's rainy outside!");
} else {
  console.log("It's a nice day!");
}

console.log("Enjoy your day!");

// Output: "It's a nice day!"

console.log("===================================");


const max = 100;
let counter  = 100;

if (counter <= max) {
  counter++;
} else {
    counter = 1;
}
console.log(counter); // Output: 1


console.log("===================================");

const round:number= 5;
let score : string= "ninety";

score += round <= 2 ? 10 : 5;

console.log(score); // Output: 100

console.log("===================================");