//Random Number Generator

// let randomNum = Math.random();
// console.log(randomNum);

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min ;
// console.log(randomNum);

// let randomNum = Math.floor(Math.random() * 50) + 100 ;
// console.log(randomNum);


const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');

const min = 1;
const max = 6;
let randomNum;

generateBtn.onclick = function() {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min ;
    result.innerText = randomNum;
}