//Math - built in object that provides a collection of properties and methods
// Math.pi = 3.14;


// console.log(Math.PI); //3.141592653589793
// console.log(Math.round(4.7)); //5
// console.log(Math.pow(3, 2)); //9
// console.log(Math.sqrt(64));

let x = 3.14;
let y = 3;
let z;

z = Math.trunc(x); //removes decimal
console.log(z);
z = Math.floor(x);
console.log(z); 
z = Math.ceil(x);
console.log(z);
z = Math.pow(x,y); //x to the power of y
console.log(z);
z = Math.sqrt(y); //square root
console.log(z);
z = Math.abs(y);  //change to positive
console.log(z);

z = Math.min(3, 7, -2, 9); //returns the smallest number
console.log(z);
z = Math.max(3, 7, -2, 9); //returns the largest number
console.log(z);

z = Math.sin(x);
console.log(z);
z = Math.cos(x);
console.log(z);
z = Math.tan(x);
console.log(z);
