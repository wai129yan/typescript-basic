// const = a variable that cannot be changed

const PI = 3.14;
let radius;
let circumference;

// PI = 3.14159; //error

// radius = window.prompt("Enter the radius of a circle: ");
// radius = Number(radius);

// circumference = 2 * pi * radius;

document.getElementById("myBtn").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH1").textContent = `Circumference is: ${circumference}`;
    console.log("Circumference is: " + circumference);
}


// console.log("Circumference is: " + circumference);

// advanced
// const PI = 3.14;
