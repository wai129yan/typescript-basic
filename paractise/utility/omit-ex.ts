//မူလ type (T) ထဲက သတ်မှတ်ထားတဲ့ property name (K) တွေကို ဖယ်ထုတ်ပြီး အသစ် type တစ်ခုကို ပြန်ဖန်တီးပေးတာပါ။

type User = {
    id : string;
    name : string;
    email : string;
    password : string;
    role: 'user' | 'admin';
}

type RegisterFormInput = Omit<User, 'name' | 'role'>;

const test:RegisterFormInput = {
    id:"8",
    email:"aa@gmail.com",
    password:"koko"
}

console.log(test);

type RegisterFormPassword = Omit<User, 'password' | 'email'>;

let test2:RegisterFormPassword = {
    id:"3",
    name:"wai",
    role:"admin",
}

console.log(`Test is `,test2);