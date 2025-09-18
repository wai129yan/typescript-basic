//Function T ရဲ့ parameter type array ကိုယူတယ်
//function တစ်ခုရဲ့ parameter type တွေကို array type အဖြစ် ထုတ်ပေးတဲ့ type ဖြစ်ပါတယ်။

function greet (name:string,age:number) {
    return `${name} is ${age} years old`;
}

type GreetParams = Parameters<typeof greet>;
const barNyar:GreetParams=[
    "outward",
    22
]

console.log(barNyar);

console.log("*******************");

//Arrow Function

const sum = (a:number,b:number):number => a + b;

type SumPara = Parameters<typeof sum>;

const inputs:SumPara = [30,33];
// sum(...inputs);

console.log(inputs);