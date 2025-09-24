// function compareNumbers(a, b) {
//   return a - b;
// }

// const numbers = [5,2,9,1,7];
// const accending = numbers.sort((a,b)=> a - b);
// const decending = numbers.sort((a,b)=> b - a);

// numbers.sort();

// console.log(numbers);
// console.log(accending);
// console.log(decending);

console.log("*******************************");

//string sorting
// const fruits = ["Banana", "Apple", "Mango", "Cherry"];

// // const sortFruits = fruits.sort();
// // console.log(sortFruits);

// const reverseFruits = fruits.sort().reverse();
// console.log(reverseFruits);



console.log("*******************************");

//object array

// const users = [
//     {name:"Alice",age:25},
//     {name:"Charlie",age:30},
//     {name:"Bob",age:20}
// ];

// // const sortByAge = users.sort((a,b)=>a.age - b.age);
// // console.log(sortByAge);
// const sortByname = users.sort((a,b)=>a.name.localeCompare( b.name));
// console.log(sortByname);


console.log("*******************************");



//multi-level sorting

//score ပေါ်မူတည်ပြီး စီပြီး
//score တူတဲ့သူများ ကို name alphabetical order နဲ့ စီ

const students = [
    {name:"Alice",score:90},
    {name:"Bob",score:90},
    {name:"Aaarlie",score:90},
    {name:"Abarlie",score:85}
];

students.sort((a,b) => {
    if(b.score === a.score) {
        return a.name.localeCompare(b.name);
    }

    const aStartA = a.name.startsWith("A") ? -1 : 1;
    const bStartA = b.name.startsWith("A") ? -1 : 1;

    if (aStartA !== bStartA) {
        return aStartA - bStartA;
    }
        // return a.name.localeCompare(b.name);

    // return b.score - a.score;
    // return students.name === startWith("A") ? -1 : 1;
});

console.log(students);

console.log("*******************************");

// Sorting strings ignoring case

// const fru =  ["banana", "Apple", "mango","Grape","Blueberry"];
//  fru.sort((a,b) => b.toLowerCase().localeCompare(a.toLowerCase()));
// // fru.sort((a,b) => a.toUpperCase().localeCompare(b.toUpperCase()));

// console.log(fru);


console.log("*******************************");


//Custom complex sorting

//a.type === b.type → same category → alphabetical by name
//Different category → a.type === "fruit" ဖြစ်ရင် fruit ကိုရှေ့ထား(-1), မဟုတ်ရင် နောက်ထား (1)

// const items = [
//     {type:"fruit",name:"Apple"},
//     {type:"vegetable",name:"Carrot"},
//     {type:"Seed",name:"Banana"}
// ];

// items.sort((a,b)=> {
//     if(a.type === b.type) {
//         return a.name.localeCompare(b.name);
//     }
//     // return a.type === "Seed" ? -1 : 1;
//     return a.type === "vegetable" ? -1 : 1;
// });
// console.log(items);

console.log("*******************************");

//preserve original array (Non destructive)

const numbers = [5,2,9,1];

const sortNumbers = numbers.slice().sort((a,b) => a-b);
// console.log(numbers);
// console.log(sortNumbers); 
const reverseNum = sortNumbers.reverse(sortNumbers);
console.log(reverseNum); 