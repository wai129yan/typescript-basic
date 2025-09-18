//ES6 Array Filter

//filter() method က array ထဲက element တွေကို condition (စစ်ဆေးမှု) အရ ရွေးထုတ်ပြီး အသစ်သော array တစ်ခုကို return လုပ်တယ်။

const customers = [
    {name:"customer1",email:"customer1@gmail.com",gender:"female",age:20},
    {name:"customer2",email:"customer2@gmail.com",gender:"male",age:40},
    {name:"customer3",email:"customer3@gmail.com",gender:"male",age:30},
    {name:"customer4",email:"customer4@gmail.com",gender:"female",age:41},
    {name:"customer5",email:"customer5@gmail.com",gender:"female",age:26},
]

// customers.filter(isMale);

// const isMale = (arrayElement) => {
//     return arrayElement.gender === "male" && arrayElement.age > 25;
// }
// const result = customers.filter(isMale);
// console.log(result);


const maleCustomers = customers.filter(array => array.gender === "male");
console.log(maleCustomers);

console.log("*******************************");


const products = [
    {name:"Shirt",price:5000 },
    {name:"Pants",price:8000 },
    {name: "Shoes",price:12000}
];

const testPro = products.filter(arr => arr.name === "Pants");

console.log(testPro);