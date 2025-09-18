//readOnly
interface User {
    id: number,
    name: string
}
const bobo5: User = {
    id: 1,
    name: "bobo",
}
bobo5.name = "ko bobo"
bobo5.id = 2
//console.log("bobo5", bobo5)

type ReadOnlyUser = Readonly<User>;
const user15: ReadOnlyUser = {
    id: 15,
    name: "user15"
}
//user15.name = "user33"
console.log("user151", user15)

console.log('*****************');



//Exclude <T ,U> (remove and re-new) remove from union type

type TypeUnion = string | number | boolean; //union type

type NoNumber = Exclude<TypeUnion, number>; //remove number and re-new
type NoString = Exclude<TypeUnion, string>; //remove string and re-new
type NoBoolean = Exclude<TypeUnion, boolean>; //remove boolean and re-new

//const popo: NoNumber = "hello";
let popo: NoNumber = "hello";
popo = true;
//popo = 100; error
console.log("popo", popo);

//const momo:NoString = 100;
let momo: NoString = 100;
momo = true;
//momo = "hello"; //error
console.log("momo", momo);

//const kolo: NoBoolean = "hello";
let kolo: NoBoolean = 100;
kolo = "hello";
//kolo = true; //error

console.log("kolo", kolo);

console.log('*****************');

//Extract <T ,U> (extract and re-new) keep from union type

type TypeUnion2 = string | number | boolean;

type stringNumber = Extract<TypeUnion2, string | number>; //keep string and number
type booleanType = Extract<TypeUnion2, boolean | number>; //keep boolean
type numberType = Extract<TypeUnion2, number | boolean>; //keep number

let susu: stringNumber = "hello";
susu = 100;
//susu = true; //error
console.log("susu", susu);

let tata: booleanType = true;
tata = 300;
//tata = "hello"; //error
console.log("tata", tata);

let num: numberType = 100;
num = true;
//num = "hello"; //error
console.log("num", num);