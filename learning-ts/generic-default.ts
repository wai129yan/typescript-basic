/*
interface User<T = string> { // T = string is default type
    name: string;
    age: number;
    extra: T
}
const bobo23: User = { name: "bobo", age: 20, extra: "developer" };
console.log('bobo', bobo23);

const koko22: User<number> = { name: "koko", age: 20, extra: 100 };
console.log('koko', koko22);

const rose: User<boolean> = { name: "rose", age: 20, extra: true };
console.log('rose', rose);

console.log('****************');

interface MetaData {
    title: string,
    description: string,
    page: number,
}

interface Page<T = MetaData> {
    id: number,
    name: string,
    extra: T,
}
const page1: Page = {  //use default
    id: 1,
    name: "page1",
    extra: {
        title: "meta1",
        description: "meta-description",
        page: 1
    }
}
console.log('page1', page1);

const paga2: Page<string> = {
    id: 2,
    name: "page2",
    extra: "page2-content"
}
console.log('paga2', paga2);

const page3: Page<boolean> = {
    id: 3,
    name: "page3",
    extra: true
}
console.log('page3', page3);

console.log('****************');

interface Page4<T extends MetaData> {
    id: number,
    name: string,
    extra: T,
}

const page40: Page4<MetaData> = { // T extends MetaData need to add
    id: 4,
    name: "page4",
    extra: {
        title: "meta4",
        description: "meta4-description",
        page: 4
    }
}
console.log('page40', page40);
*/
console.log("****************");

//omit generic built-in utilities type
interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    role: "admin" | "user" | "guest"  //union
}

const mgmg: Omit<User, "id" | "password" | "role"> = //omit id, password, role
{
    name: "mgmg",
    email: "mgmg@example.com",
}
console.log("mgmg", mgmg);

type UserWithoutId = Omit<User, "id">;
const user1: UserWithoutId = {
    name: "bobo",
    email: "bobo@example.com",
    password: "123456",
    role: "admin"
}
console.log("user1", user1);

type UserWithoutRole = Omit<User, "role">;
const user21: UserWithoutRole = {
    id: 2,
    name: "koko",
    email: "koko@example.com",
    password: "123456",
    // role: "user"
}
console.log("user2", user21);