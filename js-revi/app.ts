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




let username: string = "kyaw";
console.log(username)

let age: number = 20;
console.log(age)

let isMarried: boolean = true;
console.log(isMarried)

let price: number | string = 100;
console.log(price)

let user: string | number = "john";
console.log(user)

let userAge: number | string = 20;
console.log(userAge)

let userAge2: number | string = "Twenty";
console.log(userAge2)

let data: any = "hello";
console.log(data)
data = 100;
console.log(data)
data = true;
console.log(data)


let item: string[] = ["apple", "orange", "banana"];
console.log(item)
item.push("mango");
console.log(item)



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


// enum Role {
//     ADMIN = "admin",
//     USER = "user",
//     GUEST = "guest",
// }
// const user3: {
//     name: string,
//     age: number,
//     isLogin: boolean,
//     gender: "male" | "female",
//     role: Role
// } = {
//     name: "john",
//     age: 20,
//     isLogin: true,
//     gender: "male",
//     role: Role.ADMIN
// }
// console.log(user3);

enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
}
type UserType = {
    name: string,
    age: number,
    isLogin: boolean,
    gender: "male" | "female",
    role: Role
}
const john: UserType = {
    name: "john",
    age: 20,
    isLogin: true,
    gender: "male",
    role: Role.ADMIN
}
console.log(john)
const jane: UserType = {
    name: "jane",
    age: 20,
    isLogin: true,
    gender: "female",
    role: Role.USER
}
console.log(jane)


// type CategoryType = {
//     id: number,
//     name: string,
//     slug: string,
// }

// type ProductType = {
//     id: number,
//     name: string,
//     slug: string,
//     price: number,
//     featured_image: string,
//     photos: string[],
//     category_id: number,
//     category: CategoryType,
// }
// const electronic: CategoryType = {
//     id: 1,
//     name: "electronic",
//     slug: "electronic",
// }
// const phone: ProductType = {
//     id: 1,
//     name: "phone",
//     slug: "phone",
//     price: 1000,
//     featured_image: "phone.jpg",
//     photos: ["phone1.jpg", "phone2.jpg"],
//     category_id: electronic.id,
//     category: electronic,
// }
// console.log(phone)
// console.log(phone.category)
// console.log(phone.category.name)
// console.log(phone.category.slug)



enum Direction {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
}
console.log(Direction)
console.log(Direction.UP)
console.log(Direction.DOWN)

enum Status {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected",
}
console.log(Status)
console.log(Status.PENDING)
console.log(Status.APPROVED)


enum Day {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
}

// function isItWeekDays(day: Day): boolean {
//     return day >= Day.MONDAY && day <= Day.FRIDAY;
// }
// console.log("WeekDay monday", isItWeekDays(Day.MONDAY))
// console.log("WeekDay saturday", isItWeekDays(Day.SATURDAY))
// console.log("WeekDay thursday", isItWeekDays(Day.THURSDAY))

// let res = isItWeekDays(Day.MONDAY)
// res ? console.log("WeekDay") : console.log("WeekEnd")

function isItWeekDay(day: Day): boolean | string {
    let isWeekDay: boolean;
    switch (day) {
        case Day.SATURDAY:
        case Day.SUNDAY:
            isWeekDay = false;
            break;
        default:
            isWeekDay = true;
            break;
    }
    return isWeekDay ? "Weekday" : "Weekend";
}
console.log(isItWeekDay(Day.MONDAY))
console.log(isItWeekDay(Day.SATURDAY))
console.log(isItWeekDay(Day.SUNDAY))
>>>>>>> b1a0e13 (enum-interface)
