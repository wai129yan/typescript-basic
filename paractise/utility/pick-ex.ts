//ဒါဟာ မူလ object type (ဥပမာ User) ထဲက လိုအပ်တဲ့ property (key) အချို့ကိုသာ ရွေးချယ်ပြီး အသစ် type တစ်ခု ဖန်တီးဖို့ အသုံးပြုပါတယ်။

type User = {
    id:number;
    name:string;
    email:string;
    age:number;
}

type UserPreview = Pick<User,"id" | "email">;
const koko:UserPreview = {
    id:9,
    email:"aa@gmail.com"
    //name:"dardar"
}

console.log(koko);

console.log("*************");

interface Mular {
    id : number,
    name : string,
    email : string,
    password : string,
    role: "admin" | "user" | "guest"
}

type UserMular = Pick<Mular, "email" | "role">;

let koMular:UserMular = {
    email : "mular@gmail.com",
    role : "admin"
}

console.log(koMular);