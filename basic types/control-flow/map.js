const funcKey = () => {};
const objKey = { id: 1 };

const map = new Map();
map.set(funcKey, "Function as key");
map.set(objKey, "Object as key");

console.log(map.get(funcKey)); // Function as key
console.log(map.get(objKey)); // Object as key
