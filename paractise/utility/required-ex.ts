//Required<T>	T ထဲက optional တွေကို required ပြန်လုပ်တယ်

interface RequireUser {
    id:number,
    name?:string,
    email?:string,
    password?:string,
    role?: "admin" | "user" | "guest"
}

const bobo:RequireUser = {
    id:1,
}

console.log("bobo",bobo);

console.log("*******************");

type RequiredUser2 = Required<RequireUser>; //call back Parent Data

const realReq:RequiredUser2= {
    id:4,
    //name:"mgmg",        error
    email:"mgmg@gmail.com",
    password:"123456",
    role:"admin",
}

console.log(realReq);