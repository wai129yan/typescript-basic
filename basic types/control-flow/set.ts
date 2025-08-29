// Set ထဲ duplicate data မထည့်ချင်တဲ့အခါ

const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);  // ဒုတိယ 5 ကိုထည့်မယ်ဆို duplicate, မထည့်ဘူး
mySet.add('hello');

console.log(mySet); // Set {1, 5, 'hello'}
console.log(mySet.size); // 3


console.log("===================================");

const numbers = [1, 2, 3, 4, 4,5, 1, 2, 3];

const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers); 
console.log(uniqueNumbers.size); 
console.log([...uniqueNumbers]);
console.log(Array.from(uniqueNumbers));

console.log("===================================");

const chars = new Set(['a', 'b', 'c', 'a', 'b', 'd']);

chars.add('e');
chars.delete('b');

console.log(chars.has('a')); // true
console.log(chars.has('b')); // false
console.log(chars.size); // 4
console.log(chars);