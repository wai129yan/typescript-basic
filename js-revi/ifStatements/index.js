//if statement = if a condition is true, execute a block of code
// if not , do something else

// let age = 19;

// if (age <=  18) {
//     console.log("You are young");
// }else {
//     console.log("You are old");
// }


// let age = 16;
// let hasLicense = true;

// if (age >= 18) {
//     console.log("You can drive");
//     if (hasLicense) {
//         console.log("You have a license");
//     } else {
//         console.log("You do not have a license");
//     }
// } else {
//     console.log("You cannot drive");
// }

const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");

let age;

myButton.onclick = function () {
    age = Number(myText.value);
    console.log(age);

    if (age >= 65) {
        resultElement.textContent = "You are a senior";
    } else if (age >= 18) {
        resultElement.textContent = "You are an adult";
    } else if (age >= 13) {
        resultElement.textContent = "You are a teenager";
    } else {
        resultElement.textContent = "You are a child";
    }

}

