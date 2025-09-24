// map က array ရဲ့ element တစ်ခုချင်းစီကို လုပ်ဆောင်ပြီး အသစ်အဖြစ်ပြန်ပေးတဲ့ array ကို ပြန်လည်ထုတ်ပေးပါတယ်။
// Original array ကို မပြောင်းဘူး။

// const newArray = array.map((element, index, array) => {
//   // return new value
// });


//traditional function
// var numbers = [1, 2, 3, 4];

// var doubled = numbers.map(function(bar) {
//     return bar * 2;
// });

// console.log(doubled); // [2, 4, 6, 8]


// Price တွေကို 10% discount
// const prices = [1000, 2000, 3000, 4000];

// const discounted = prices.map(price => price * 0.9);

// console.log(discounted); // [900, 1800, 2700, 3600]


// User Object တွေထဲက name && age
// const users = [
//     {name:"Alice",age:25},
//     {name:"Bob",age:30},
//     {name:"Charlie",age:35}
// ];

// // const names = users.map(user => user.name );

// const age = users.map(user => user.age );
// //console.log(names);
// console.log(age);


// String array ကို အကြီးအတိုင်း အဖော်ပြုမယ်
// const fruits = ["apple", "banana", "cherry"];
// // const upperFru = fruits.map(fru => fru.toUpperCase(fru));
// const upperFru = fruits.map(fru => fru.toUpperCase()).reverse();
// console.log(upperFru);




// const fruits = ["apple", "banana"];
// const copyFruits = [...fruits];   

// copyFruits က fruits ကို copy လုပ်ထားတဲ့ shallow copy ဖြစ်တယ်။
// တိုက်ရိုက် reference မဟုတ်တော့ original fruits ကို တိုက်ရိုက် ပြောင်းမသွားဘူး။

//copyFruits.push("cherry");

// console.log(fruits);      // ["apple", "banana"]
//console.log(copyFruits);  // ["apple", "banana", "cherry"]



// const fruits = ["apple", "banana", "cherry"];

// const upperFru = [...fruits]  // copy to avoid mutating original
//   .map(fru => fru.toUpperCase())
//   .reverse();

// console.log(upperFru);


//complex mapping
// const students = [
//   { name: "Alice", score: 90 },
//   { name: "Bob", score: 75 },
//   { name: "Charlie", score: 60 },
//   { name: "David", score: 45 }
// ];

// const result = students.map(student => {
//     let grade;
//     if(student.score >= 80) grade = "A";
//     else if (student.score >= 60) grade = "B";
//     else grade = "C";

//     return {
//         name : student.name,
//         score : student.score,
//         grade : grade
//     };
// });

// console.log(result);

//api map
const apiData = [
  { id: 1, user: { firstName: "Alice", lastName: "Smith" } },
  { id: 2, user: { firstName: "Bob", lastName: "Brown" } },
  { id: 3, user: { firstName: "Charlie", lastName: "Johnson" } }
];

const users = apiData.map(item => ({
    id : item.id,
    fullName: `${item.user.firstName}`
}));

console.log(users);





// Index ကို သုံးပြီး Order ပြန်ထုတ်

const tasks = ["Design", "Develop", "Test", "Deploy"];

const ordered = tasks.map((task,index) => ({
    order:index + 1,
    task:task
}));

console.log(ordered);
