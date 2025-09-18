//rest parameter
// Function တစ်ခုမှာ argument တွေ အများကြီး လက်ခံနိုင်ဖို့ သုံးတဲ့ Syntax.
//... သုံးပြီး variable နာမည်နောက်မှာ ထည့်ရမယ်။
//အဲ့ဒီအခါမှာ function ထဲကို ဝင်လာတဲ့ ကျန်တဲ့ argument တွေကို array အနေနဲ့ သိမ်းပေးမယ်။

const { param } = require("express/lib/request");
const { futimes } = require("fs");

const calculate = (x,y) => {
    return x + y;
}

calculate(1,2);
 console.log(calculate);

console.log("***********************");

function introduce(name, age, ...hobbies) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Hobbies:", hobbies);
}

introduce("Aung Aung", 25, "reading", "coding", "traveling");

console.log("***********************");


function oldWay() {
  console.log(arguments);
}

function newWay(...args) {
  console.log(args);
}

oldWay(1,2,3);  // Arguments object (array-like, not real array)
newWay(1,2,3);  // Real array

console.log("***********************");

const cal= (...params) => {
    let total = 0;
    // params.forEach(num =>{  //foreach Loop
    //     total += num;
    // });
    for(let i=0;i<params.length;i++){
        total += params[i];
    };
    //return total;

    console.log(total);
}

cal(1,2,3,4,5,0);

console.log("***********************");

function logMessages(level, ...messages){
    messages.forEach(msg => {
        console.log(`${level} => ${msg}`);
    })
}
logMessages("Info","Sever started","Database Connected","Listening On port 3000");

console.log("***********************");


function takeOrder(tableNumber, ...dishes)
{
    console.log(`Table :::  ${tableNumber}`);
    console.log("Order ::: ",dishes.join("/ "));
}
takeOrder(5, "Fried Rice", "Noodle Soup", "Tea")