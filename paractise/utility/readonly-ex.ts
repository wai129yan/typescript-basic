//Readonly<T>	Property တွေကို read-only ဖြစ်အောင်လုပ်တယ်
//object တစ်ခုရဲ့ property တွေအားလုံးကို Read-only (မပြောင်းလဲနိုင်အောင်) ပြုလုပ်ပေးပါတယ်။

type User = {
    id:number;
    name:string;    
};

const user:Readonly<User> = {
    id:1,
    name:"mgmg",
}

console.log(user);

console.log("****************");


interface Bomber {
    id: number,
    name:string    
}
const bom1:Bomber = {
    id:1,
    name:"bom",
}

bom1.name = "bom bom"
bom1.id = 2
console.log(bom1);

console.log("****************");

type readBom = Readonly<Bomber>;
const bunBom:readBom={
    id:89,
    name:"agag",
}

console.log(bunBom);

const buubuu:readBom= {
    id:22,
    name:"www",
}

console.log(buubuu);

console.log("****************");


type Profile = {
    name:string;
    address:{
        city:string,
        country:string,
    },
};

const porfileInfo:Readonly<Profile> = {
    name: "Ko Ko",
    address: {
        city:"Yangon",
        country:"Myanmar",
    },
};

//porfileInfo.name = "Cho Cho ";

console.log(porfileInfo);