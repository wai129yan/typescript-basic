//returnType<T>
function getUser() {
    return { id: 1, name: "bobo", email: "bobo@gmail.com" };
}

type User = ReturnType<typeof getUser>;
const bobo: User = {
    id: 1,
    name: "bobo",
    //name: 200,
    email: "bobo@gmail.com"
};
console.log("bobo", bobo);

console.log("***********");

//parameter type

function getUserInfo(id: number, name: string, email: string) {
    return { id, name, email }
}
type UserInfo = Parameters<typeof getUserInfo>; //return tuple
const titi: UserInfo = [
    1,
    "titi",
    "titi@gmail.com"
]
console.log("titi", titi);

console.log("***********");