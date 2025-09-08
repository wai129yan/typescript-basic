interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    role: "admin" | "user" | "guest"  //union
}

type UserWithIdAndName = Pick<User, "id" | "name">; // pick up id and name
const user1: UserWithIdAndName = {
    id: 1,
    name: "bobo",
}
console.log("user1", user1);

type UserWithIdAndEmail = Pick<User, "id" | "email">;
const user2: UserWithIdAndEmail = {
    id: 2,
    email: "koko@example.com",
}
console.log("user2", user2);

console.log("***************");

//partial (make all property optional)
const mgmg: UserWithIdAndEmail = {
    id: 2,
    email: "koko@example.com",
}
console.log("mgmg", mgmg);

type PartialUser = Partial<User>;
const mgmg2: PartialUser = {
    id: 2,
    email: "koko@example.com",
}
console.log("mgmg2", mgmg2);


console.log("***************");

//required (make all property required)
interface RequiredUser {
    id: number,
    name?: string, //optional
    email?: string,
    password?: string,
    role?: "admin" | "user" | "guest"  //union
}
const bobo: RequiredUser = {
    id: 1,
    // name: "bobo",
    // email: "bobo@example.com",
    // password: "123456",
    // role: "admin",
}

console.log("bobo", bobo);

type RequiredUser2 = Required<RequiredUser>;
const bobo2: RequiredUser2 = {
    id: 1,
    name: "bobo",
    email: "bobo@example.com",
    password: "123456",
    role: "admin",
}
console.log("bobo2", bobo2);

console.log("***************");

//Record<K/T>
type UserRoles = 'admin' | 'user' | 'guest';
type UserA = Record<UserRoles, string | number>;
const userA: UserA = {
    admin: "admin",
    user: "user",
    guest: "guest",
    //guest: 100,
}
console.log("userA", userA);

type UserStatus = 'active' | 'inactive'; //union
type UserB = Record<UserRoles, UserStatus>;
const userB: UserB = {
    admin: "active",
    user: "inactive",
    guest: "active",
    //admin: "active now",
}
console.log("userB", userB);