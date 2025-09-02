//string methods = allow you to manipulate and work with text(strings)
//The charAt() method in JavaScript is used to retrieve the character at a specific index (position) in a string. 
// It returns the character as a string, not as a number.

let userName = "Brocode";

// userName.charAt(30);
// console.log(userName.charAt(30));

//console.log(userName.lastIndexOf("e"));
// console.log(userName.length);

// console.log(userName.toUpperCase());

// console.log(userName.repeat(2));
// console.log(userName.startsWith("B"));

let result = userName.startsWith(" ");

if (result) {
    console.log("Your username can't  begin with ' ' ");
} else {
    console.log(userName);
}

let phoneNumber = "123-456-789";

// phoneNumber = phoneNumber.replaceAll("-", "//");
// console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart(25,"1");  
//JavaScript မှာ padStart() method က string တစ်ခုကို အစမှာ padding (အပိုလိုအပ်သော characters) ထည့်တာကို အသုံးပြုပါတယ်။ 
// အဲဒါက string ရဲ့ အလျားကို အချိန်ပေါ်မှာ ပြောင်းလဲပေးပြီး၊ ပေါ်လွင်တဲ့ string အနေနဲ့ အစမှာ အပို characters တွေ ထည့်နိုင်ပါတယ်။
// console.log(phoneNumber);



phoneNumber = phoneNumber.padEnd(25,"1");  
console.log(phoneNumber);
