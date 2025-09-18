//object destructuring
//Object destructuring requires using the same variable names as the object’s property names

const customer = { name:'customer',email:'customer@gamil.com',gender:'male' };

// const name = customer.name;
// const email = customer.email;
// const gender = customer.gender;

//ES6
const {name,email,gender}= customer;
console.log(name,email,gender);



//Array Destructuring
const cities = ["Yangon","Mandalay","NayPyiTaw"];
// const cityOne = cities[0];
// const cityTwo = cities[1];
// const cityThree = cities[2];

//ES6
 const[cityOne,cityTwo,cityThree] = cities;
// const[cityOne1,,cityThree3] = cities;
// console.log(cityThree3);
 console.log(cities);

console.log("*************************************");
console.log("--------------------------------------");












//Spread Operator
// Spread Operator (...) ဆိုတာ JavaScript ထဲမှာ Array နဲ့ Object တွေကို ချဲ့ထွင်ဖော်ပြဖို့ (expand) သုံးတဲ့ syntax တစ်ခုပါ။
// အဓိကအားဖြင့် copy လုပ်ခြင်း, data ထပ်ထည့်ခြင်း, array / object တွေကို ပေါင်းခြင်း စတဲ့နေရာတွေမှာ အသုံးများပါတယ်။

//const spreadObj = { name:'customer',email:'customer@gamil.com',gender:'male' };
const arr1 = [1,2,3];
// const arr2 = [...arr1,2,3];
// const arr2 = [4,5,6,...arr1]
const arr2 = [7,8,...arr1,0,9,8]

console.log(arr2);
console.log(arr2[3]);
console.log(arr2[5]);

console.log("*************************************");

const barr1 = ["Mandalay","Bago","Bagan"];
const barr2 = ["hello"].concat(barr1);

console.log(barr2);

// console.log("*************************************");

// // const bkar1 = ["hello", "Mandalay", "Bago", "Bagan"]
// // const bkar2 = ["Test", ...bkar1];
// // console.log(bkar2); // ["hello", "Mandalay", "Bago", "Bagan"]

// const skar1 = ["hello", "Mandalay", "Bago", "Bagan"];

// // find index of "Mandalay"
// const index = skar1.indexOf("hello");
// console.log(index);

// console.log("*************************************");

// make a copy, then insert "Test" after Mandalay
//const skar2 = [...skar1]; 
//console.log(skar2);
// skar2.splice(index + 1, 0, "Test");
// skar2.splice(index,0);

//  console.log(skar2);

