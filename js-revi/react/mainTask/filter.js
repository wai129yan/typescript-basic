// filter() ဟာ array method တစ်ခု
// Array ထဲက element တစ်ခုချင်းစီကို စစ်ဆေးပြီး 
// (true/false) → true ဖြစ်တဲ့ element တွေကိုသာ အသစ် array ထဲ ထည့်ပေးတယ်

//ရင်း array ကို မပြောင်းဘူး (immutable)

//basic sample
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // [2, 4, 6]
// console.log(numbers);

// filter by age
// const users = [
//   {name:"Alice",age:17},
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 11 },
//   { name: "Rome", age: 13 }
// ];

// const adults = users
// .filter(user => user.age >= 15);
// // .map(user => user.name);  name only | age only

// console.log(adults);


// Stock ရှိတဲ့ product တွေကို filter
// const products = [
//     { name:"Laptop",inStock:true},
//     { name:"Phone", inStock: false },
//     { name:"Tablet", inStock: true },
//     { name:"Cover", inStock: true }
// ];

// const avail = products.filter(pro => pro.inStock);
// console.log(avail);


//Search Function

const fruits =  ["Apple", "banApa", "grape", "mango", "pineapple"];

const search = "Ra";
const result = fruits.filter(fruit =>
  fruit.toUpperCase().includes(search.toUpperCase())  
);

console.log(result);