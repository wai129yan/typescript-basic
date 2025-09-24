// //traditional
// function add(a,b){
//     return a + b;
//  }

// console.log(add(3,5));

//arrow 
// const add=(a,b) => a+ b ;
// console.log(add(3,5));

// //complex style
// const processUsers = ({ users, multiplier = 2 }) => 
//     users
//         .filter(({ active }) => active) // keep only active users
//         .map(({ name, score }) => ({ 
//             name, 
//             adjustedScore: score * multiplier 
//         }))
//         .sort((a, b) => b.adjustedScore - a.adjustedScore) // sort descending
//         .map(user => ({
//             ...user,
//             badges: Array.from({ length: Math.ceil(user.adjustedScore / 10) }, (_, i) => `Badge-${i + 1}`)
//         }));

// const users = [
//     { name: "Alice", score: 42, active: true },
//     { name: "Bob", score: 25, active: false },
//     { name: "Charlie", score: 58, active: true }
// ];

// console.log(processUsers({ users }));


const user1 = [
    {name:"Alice",age:25,active:true},
    {name:"Bob",age:17,active:false},
    {name:"Charlie",age:30,active:true}
];

const activeUserNames = user1
    .filter(user1=>user1.active)
    // .map(user1 => user1.name );
     .map(user1 => ({name:user1.name,age:user1.age}));   //multiple output

console.log(activeUserNames);


// var activeUsers = user1.filter(function(user){
//     return user.active;
// }).map(function(user){
//     return user.name;
// });


//calculate total price

const cart = [
    {item:"Shoes",price:50},
    {item:"Hat",price:20},
    {item:"T-shirt",price:30}
];

const totalPrice = cart.reduce((total,product) => total + product.price,0);

console.log(totalPrice);

//sort the objects

const pro = [
    {name:"Laptop",price:1000},
    {name:"Phone",price:600},
    {name:"Tablet",price:800}
];
const sortedPro = pro.sort((a,b) => b.pro)