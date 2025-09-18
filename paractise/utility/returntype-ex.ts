//	Function T ရဲ့ return type ကိုယူတယ်


function  createUser(){
    return {id:1,name:"AgAg",email:"aung@gmail.com"};
}

type User =  ReturnType<typeof createUser>;

const newUser:User={
    id:3,
    name:"bobo",
    // name:400,
    email:"bo@gmail.com"
}

console.log(newUser);


console.log("****************");


function fetchUser(){
    return {
        id:1,
        name:"MgMg",
        email:"mgmg@gmail.com"
    };
}

type UserV = {
    id:number;
    name:string;
    email:string;
}

type UserV1 = ReturnType<typeof fetchUser>;

const user:UserV1 = {
    id : 3,
    name : "koko",
    email : "ko@gmail.com",
}
console.log(user);