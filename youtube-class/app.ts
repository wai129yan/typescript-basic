let funcReturnString = (): string => {
    console.log("hi");
    return "Hello World";
}

console.log(funcReturnString());


let multiple = (num: number): number => {
    return num * 2;
}

console.log(multiple(2));


let mul = (num1: number, num2: number) => {
    return num1 * num2;
}

console.log(mul(2, 3));

let sum = (num1: number, num2: number, another?: number) => {
    return num1 + num2 + (another || 0);
}

console.log(sum(2, 3));
console.log(sum(2, 3, 4));


//Type aliases
type UserType = {
    username: string;
    age: number | string;
    phone?: string
}
let betterFun = (user: UserType) => {
    console.log(user.username);
    console.log(user.age);
    console.log(user.phone || "No phone");
}

betterFun({ username: "kyawwaiyan", age: "twenty", phone: "123456" });

type myFunc = (a: number, b: string) => void;

let write: myFunc = (a, b) => {
    console.log(a + b);
}
write(2, "agag");

type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
}
let user3: UserType2 = {
    username: "kyawwaiyan",
    age: 25,
    phone: "123456",
    theme: "dark"
}

//Interface

interface IUser {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
}

interface Empo extends IUser {
    employeeId: number;
}

const employee: Empo = {
    username: "kyawwaiyan",
    age: 25,
    phone: "123456",
    theme: "dark",
    employeeId: 123456
}
console.log(employee);
const user4: IUser = {
    username: "kyawwaiyan",
    age: 25,
    phone: "123456",
    theme: "dark"
}
console.log(user4);

//generic type

interface IAuthor {
    id: number;
    username: string;
}
interface ICategory {
    id: number;
    title: string;
}
interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
    id: number;
    title: string;
    desc: T;
    extra: T[];
}

const testMe: IPostBetter<String> = {
    id: 1,
    title: "test",
    desc: "test-desc",
    extra: ["cat1", "cat2"],
}
console.log(testMe);
console.log(testMe.extra[0]);
console.log(testMe.desc);

interface IPostWithAuthor extends IPostBetter<IAuthor> {
    extra: IAuthor[];

}
const testMeWithAuthor: IPostWithAuthor = {
    id: 1,
    title: "test",
    desc: { id: 2, username: "waiyan" },
    extra: [{ id: 1, username: "kyawwaiyan" }],
}
console.log(testMeWithAuthor);