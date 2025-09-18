//one dimension
const num1 = [1,2,3];

//two dimension
const num2 = [[1,2],[3,4],[5,6],[7,8],[9,10]];

//Access
console.log(num1[0]);
console.log(num2[0][1]);
console.log(num2[num2.length-1]);

//One Diemension Array Loop

// for(let i=0;i< num1.length;i++){
//     let element = num1[i];
//     console.log(element);
// }


//Two Dimension Array Loop
for(let i=0;i< num2.length;i++){
    let currentArray = num2[i];
    for (let v=0;v<currentArray.length;v++){
        let currentElement = currentArray[v];
        console.log(currentElement);
    }
}



const vally = [["a","b"],["c","d"],["e","f"],["g","h"]];

for(let i=0;i<vally.length;i++){
    let currentI = vally[i];
    for (let v=0;v<currentI.length;v++){
        let secData = currentI[v];
        console.log(secData);
    }
    //console.log(currentI);
}








// const scores = [
//   [80, 90, 75],   // Student A 245  //735
//   [60, 85, 95],   // Student B 240
//   [100, 70, 80]   // Student C 250
// ];

// const totalScore = scores.reduce((acc,studentScores) => {
//     const studentTotal = studentScores.reduce((sum,score) => sum  + score , 0);
//     return acc + studentTotal;
// },0);

// console.log(totalScore);