// .slice() သည် array သို့မဟုတ် string မှ element (သို့) character တချို့ကို ကူးယူပြီး အသစ်သော array (သို့) 
// string တစ်ခုကို ပြန်ပေးသည့် method ဖြစ်ပါတယ်။

// Array အတွက် → နေရာအချင်းချင်း element ကို ကူးယူပြီး အသစ် array ပြန်ပေးသည်။
// String အတွက် → အချင်းချင်း character ကို ကူးယူပြီး အသစ် string ပြန်ပေးသည်။
//Original array fruits မပြောင်းလဲပါ။

const fruits = ["apple", "banana", "cherry", "date", "fig"];

const part1 = fruits.slice(1,3);
console.log(part1);

console.log(fruits); //Original array fruits မပြောင်းလဲပါ။

console.log("******************");

//string

const text = "Javascript";
console.log(text.slice(4,10));