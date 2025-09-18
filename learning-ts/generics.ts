function identity(arg: any): any {
    return arg;
}

//generics
//လိုချင်တဲ့ type ကို parameter အနေနဲ့ပေးပြီး အသုံးပြုနိုင်စေတဲ့ TypeScript နည်းလမ်း


let a = 10;
// a = "apple";
console.log('a', a);

function A(a: number): number {
    return a;
}
console.log('A', A(10));

function B(a: string): string {
    return a;
}
console.log('B', B("hello"));

function C(a: boolean): boolean {
    return a;
}
console.log('C', C(true));

function todo<T>(params: T): T {
    return params;
}

console.log('todo', todo<number>(10));
console.log('todo', todo<string>("hello"));
console.log('todo', todo<boolean>(true));


type UserType<T> = {
    name: T;
    age: number;
    extra: T[];
}
let user1: UserType<string> = {
    name: "bobo",
    age: 20,
    extra: ["nono", "jane"],
}

let user2: UserType<number> = {
    name: 100,
    age: 20,
    extra: [1, 2, 3],
}

let user3: UserType<boolean | string> = {
    name: true,
    age: 20,
    extra: [true, false, "hello"],
}


interface IForm<T, U> {
    name: T;
    email: T;
    age: U;
    password: T;
    extra: T[];
    address: {
        street: T,
        city: T,
        postalCode?: U
    }
}

let loginForm: IForm<String, Number> = {
    name: "bobo",
    email: "bobo@example.com",
    age: 20,
    password: "123456",
    extra: ["nono", "jane"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        postalCode: 12345,
    }
}

console.log(loginForm);

let registerForm: IForm<String | Number | boolean, Number> = {
    name: "agag",
    email: "agag@example.com",
    age: 20,
    password: "123456",
    extra: ["nono", "jane", true, 123],
    address: {
        street: "123 Main St",
        city: "Anytown",
        postalCode: 12345,
    }
}
console.log(registerForm);




function infoUser<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const userOne = infoUser(
    { name: "bobo", gender: "male", age: 30, phone: "0987654321" },
    { age: 30, phone: "0987654321" }
);

console.log("userOne", userOne);
console.log("userOne age", userOne.age);
console.log("userOne phone", userOne.phone);
