//ternary operator - a shortcut to if {} and else statements
//helps to assign a variable based on a condition 

//condition ? codeIfTrue : codeIfFalse;

let age = prompt("Enter your age:");
age = Number(age);
let message = age >= 18 ? "You're an adult" : "You're a young";
console.log(message);