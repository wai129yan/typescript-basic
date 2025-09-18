//partial T ထဲက property တွေကို optional လုပ်တယ်
//make all property optional

type User = {
    id : number;
    name : string;
    email : string;
};

const user1:User =  {
    id:1,
    name:"MgMg",
    email:"mgmg@gmail.com"
}

const updateUser:Partial<User> = {
    id:1
}

console.log(updateUser);

console.log("****************");

//Partial with nested objects

type Butar = {
    id:number;
    name:string;
    email:string;
    address?:{
        city:string;
        street:string;
        zipCode:string;
    };    
};

const updateUser1:Partial<Butar> = {
    name:"helo",
    email:"hello@gmail.com",
}

console.log(updateUser1);

// type DeepPartial<T> = {
//     [P in keyof T]?:T[P] extends object ? DeepPartial<T[P]> : T[P];
// }

// const updateUser2:DeepPartial<Butar> = {
//     address:{
//         city:"hakata",
//     }
// }

// console.log(updateUser2);