let day: number = 3;
let dayName: string;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Unknown";
        break;
}

console.log(`Today is ${dayName}`); // Output: Today is Wednesday

console.log("===================================");

let fruit: string = "apple";
let color: string;
switch (fruit) {
    case "banana":
        color = "yellow";
        break;
    case "apple":
        color = "red";
        break;
    case "grape":
        color = "purple";
        break;
    default:
        color = "unknown";
        break;
}
console.log(`The color of the ${fruit} is ${color}`); // Output: The color of the apple is red

console.log("===================================");

let role = "learner";

switch (role){
    case "10years experience":
        console.log("You are a senior developer.");
        break;
    case "5years experience":
        console.log("You are a mid-level developer.");
        break;
    case "1year experience":
        console.log("You are a junior developer.");
        break;
    case "learner":
        console.log("You are still a student.");
        break;
    default:
        console.log("Role not recognized.");
        break;
}


console.log("===================================");

let carType = "mazada";

switch (carType) {
    case "bmw":
        console.log("Prices will be 800万.");
        break;
    case "audi":
        console.log("Prices will be 600万.");
        break;
    case "benz":
        console.log("Prices will be 500万.");
        break;
    case "mazada":
        console.log("Prices will be 300万.");
        break;
    default:
        console.log("Car type not recognized.");
        break;
}

// Output: Prices will be 300万.

console.log("===================================");


let city = "Yangon";
let area = "8 Miles";

switch (city) {
    case "Yangon":
        switch (area) {
            case "Tarmwe":
                console.log ("Delivery charge is 1000ks.");
                break;
            case "8 Miles":
                console.log ("Delivery charge is 2000ks.");
                break;
            case "Dagon":
                console.log ("Delivery charge is 3000ks.");
                break;
            default:
                console.log ("Area not recognized.");
                break;
        }
    case "Mandalay":
        switch (area) {
            case "Aungmyaythazan":
                console.log ("Delivery charge is 1500ks.");
                break;
            case "Chanayethazan":
                console.log ("Delivery charge is 2500ks.");
                break;
            case "Pyigyitagon":
                console.log ("Delivery charge is 3500ks.");
                break;
            default:
                console.log ("Area not recognized.");
                break;
        }
    }


console.log("===================================");


// Enum-like object in ES6+
const Role = {
  Admin: 'Admin',
  User: 'User',
  Guest: 'Guest'
};

// userRole can be assigned from Role object
let userRole = Role.User;

switch (userRole) {
  case Role.Admin:
    console.log("Access granted to admin panel.");
    break;
  case Role.User:
    console.log("Access granted to user dashboard.");
    break;
  case Role.Guest:
    console.log("Read-only access granted.");
    break;
  default:
    console.log("Unknown role.");
}

// Output: Access granted to user dashboard.
console.log("===================================");


