<<<<<<< HEAD
// let username: string = "kyaw";
// console.log(username);
// function addTwoNumber(a: number, b: number)
//     : number | string {
//     return a + b;
// }
// console.log(addTwoNumber(10, 20));
// console.log(addTwoNumber(100, 200));
// console.log(addTwoNumber(1000, 2000));
var username = "kyaw";
console.log(username);
var age = 20;
console.log(age);
var isMarried = true;
console.log(isMarried);
var price = 100;
console.log(price);
var user = "john";
console.log(user);
var userAge = 20;
console.log(userAge);
var userAge2 = "Twenty";
console.log(userAge2);
var data = "hello";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);
var item = ["apple", "orange", "banana"];
console.log(item);
item.push("mango");
console.log(item);
=======
// // let a:string = "apple"; // string
// // a = "100";
// // a = "true"
// // console.log(a);
// // let b:number = 100; // number
// // //  b= "boss"
// // console.log(b);
// // let username: string = "john";
// // // username =400
// // console.log(username);
// // function addTwoNumber(a:number,b:number):number|string{
// //     return a+b +"Ks"
// // }
// // console.log(addTwoNumber(10,20));
// // console.log(addTwoNumber(100,200));
// // console.log(addTwoNumber(100,300));
// let username: string = "john";
// console.log(username)
// let age: number = 20;
// console.log(age)
// let isLogin: boolean = true;
// console.log(isLogin)
// let price: number | string = 100;
// console.log(price)
// let user: string | number = "john";
// console.log(user)
// let userAge: string | number = "john";
// console.log(userAge)
// let userAge2: string | number = "20";
// console.log(userAge2)
// let data: any = "john";
// console.log(data)
// data = 100;
// console.log(data)
// data = true;
// console.log(data)
// let item: string[] = ["apple", "banana", "orange"];
// console.log(item)
// let item2: number[] = [1, 2, 3, 4, 5];
// console.log(item2)
// let item3: boolean[] = [true, false, true];
// console.log(item3)
// let item4: string[] | number[] = ["apple", "20", "banana", "30"];
// console.log(item4)
// let item5: string[] | number[] = [100, 200, 300];
// console.log(item5)
// let mixData: string | number | boolean = "john";
// console.log(mixData)
// mixData = 100;
// console.log(mixData)
// mixData = true;
// console.log(mixData)
// let mixData2: any[] = ["john", 100, true];
// console.log(mixData2)
// //tuple
// let tupleData: [string, number, boolean] = ["john", 100, true];
// console.log(tupleData);
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["GUEST"] = "guest";
})(Role || (Role = {}));
var user3 = {
    name: "john",
    age: 20,
    isLogin: true,
    role: Role.ADMIN
};
console.log(user3);
>>>>>>> b1a0e13 (enum-interface)
