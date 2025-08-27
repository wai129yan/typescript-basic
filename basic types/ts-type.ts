import { log } from "console";

//Types examples
let name: string = "kyaw";
console.log(name);
let age: number = 20;
console.log(age);
let isDone: boolean = false;
console.log(isDone);
let price: number | string = 100;
console.log(price);
let user: string | number = "john";
console.log(user);

console.log("===================================");

//Object type

let person:{name:string ; age: number ; educate : boolean} = {
    name : "kyaw",
    age : 20,
    educate : true
};

console.log(person);

const product : {id: number ; name: string ; price: number | string} = {
    id : 1,
    name : "Laptop",
    price : 1000
};

console.log(product);

console.log("===================================");

//Array type
let fruits: string[] = ["apple", "orange", "banana"];
console.log(fruits);
fruits.push("mango");
console.log(fruits);

type User1 = {
    id: number;   
    name: string;
    age: number;
};

const users: User1 []=[      //why make array of object
    {id:1, name:"kyaw", age:20},
    {id:2, name:"john", age:22},
    {id:3, name:"doe", age:25}
]
console.log(users);


type Comment = {
    id: number;
    comment: string;
    userId: number;
};

type BlogPost = {
    id: number;
    title: string;
    comments: Comment[];
};

const post:BlogPost = {
    id: 1,
    title: "My First Post",
    comments: [
        {id:1, comment:"Great post!", userId:1},
        {id:2, comment:"Thanks for sharing.", userId:2}
    ],
};

console.log(post.title);

console.log(post.comments[0].comment);
console.log(post.comments[1].comment);

console.log("===================================");


//Turple type
//Tuple (တပ်ပဲလ်) ဆိုတာက array တစ်ခုလိုပဲဖြစ်ပေမယ့် ထဲမှာရှိတဲ့ element တစ်ခုချင်းစီရဲ့ data type ကို တိတိကျကျသတ်မှတ်ထားနိုင်တယ်။
//ဉပမာ string, number, boolean တို့အနေနဲ့ အစဉ်အတိုင်းသိမ်းထားမယ်ဆိုရင် tuple က perfect choice ဖြစ်ပါတယ်။

let product1: [number, string, boolean] = [101, "Laptop", true];
console.log(product1);

// Mini Project: Product Inventory using Tuple

type ProductTuple = [number, string, number, boolean];

const inventory: ProductTuple[] = [
    [101, "Laptop", 1000, true],
    [102, "Phone", 500, false],
    [103, "Tablet", 700, true]
];

// Function to display all products
function displayInventory(products: ProductTuple[]) {
    products.forEach(([id, name, price, inStock]) => {
        console.log(`ID: ${id}, Name: ${name}, Price: ${price}, In Stock: ${inStock}`);
    });
}

displayInventory(inventory);

// Function to add a new product
function addProduct(products: ProductTuple[], newProduct: ProductTuple): ProductTuple[] {
    return [...products, newProduct];
}

// Example usage
const newProduct: ProductTuple = [104, "Monitor", 300, true];
const updatedInventory = addProduct(inventory, newProduct);
console.log("After adding new product:");
displayInventory(updatedInventory);


let color: [number, number, number] = [255, 0, 0]; // Red
console.log(color);

console.log("===================================");

//Enum type
//TypeScript မှာ enum type က အမျိုးအစားတစ်ခုဖြစ်ပြီး, တန်ဖိုးအစုအဝေး (a set of named constants) ကို အမည်ပေးပြီး စီရင်ဖော်ပြရာ တွင် အသုံးပြုပါတယ်။
//  အထူးသဖြင့် status, roles, days, actions စတဲ့ တန်ဖိုးရှင်းရှင်းတိတိဖော်ပြချင်တဲ့အခါ အသုံးများပါတယ်။

enum Role 
{
    Admin = "koko",
    Editor = "john",
    Viewer = "mgmg"
}

let userRole: Role = Role.Viewer;
console.log(userRole); 



enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

const today: Day = Day.Monday;
console.log(today); // Output: 1


enum Status {
  Pending,
  InProgress,
  Completed,
  Failed
}

function getStatusMessage(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "Task is waiting to start.";
    case Status.InProgress:
      return "Task is currently running.";
    case Status.Completed:
      return "Task completed successfully.";
    case Status.Failed:
      return "Task failed.";
    default:
      return "Unknown status.";
  }
}

console.log(getStatusMessage(Status.InProgress)); // Task is currently running.


console.log("===================================");

//Any type
// any ဟာ TypeScript ရဲ့ type checking အားသာချက်ကို ဖယ်ထားလိုတဲ့အခါ သုံးတတ်ပါတယ်။
// Unknown data (e.g. API response ကို type မသိသေးတဲ့အချိန်)
// Gradual migration (JavaScript project ကို TypeScript ပြောင်းတဲ့အချိန်)
// Temporary bypass (type checking ကို ခဏလွှဲချင်တဲ့အချိန်)

function processUserMessage(message:any)
{
    if (typeof message === "string")
    {
        console.log("User message is a string: " + message);
    } else if (typeof message === "number")
    {
        console.log("User message is a number: " + message);
    } else {
        console.log("User message is of unknown type");
    }
}

processUserMessage("Hello, world!");
processUserMessage(42);
processUserMessage({text: "Hi!"});



function processJsonData(data:any)
{
    for (const key in data)
    {
        console.log(`${key}: ${data[key]}`);
    }
}

const jsonData = '{"name":"kyaw","age":20,"isStudent":true}';
const parsedData = JSON.parse(jsonData);
processJsonData(parsedData);

console.log("===================================");


//unknown type
// unknown type က any type နဲ့တူပါတယ်။ ဒါပေမယ့် unknown type ကပိုလုံခြုံပြီး type safety ပိုရှိပါတယ်။
// any type က variable တစ်ခုကို ဘယ်လို data type မဆို သတ်မှတ်နိုင်ပြီး ဘာလုပ်မလဲဆိုတာကို TypeScript က မစစ်ဆေးပေးပါဘူး။
// unknown type က variable တစ်ခုကို ဘယ်လို data type မဆို သတ်မှတ်နိုင်ပေမယ့် ဘာလုပ်မလဲဆိုတာကို TypeScript က စစ်ဆေးပေးပါတယ်။

let value: unknown;
value = true; // OK
value = 42;   // OK     
value = "Hello"; // OK
value = []; // OK
value = {}; // OK

// unknown type ကို သုံးတဲ့အခါမှာ type check လုပ်တာက အရေးကြီးပါတယ်။ ဒီလိုလဲ unknown ကို အသုံးပြုမယ့်အခါ, သင် check မလုပ်မီ တိုက်ရိုက်မသုံးသင့်ပါဘူး။

function processData(data: unknown)
{
    if (typeof data === "string")
    {
        console.log("String data: " + data.toUpperCase());
    } else if (typeof data === "number")
    {
        console.log("Number data: " + (data * 2));
    } else {
        console.log("Unknown data type");
    }
}

processData("Hello World");
processData(42);
processData(true);  // Will log "Unknown type"

// user input က dynamic ဖြစ်နိုင်တယ်၊ အကြောင်းအရာ (type) မသိရသေးတာကြောင့် unknown ကို အသုံးပြုပြီး type check လုပ်တဲ့ နည်းလမ်းအတူ အကောင်းဆုံး safety ကို အတည်ပြုနိုင်ပါတယ်။

console.log("===================================");


//Union type
//Union type က variable တစ်ခုမှာ အမျိုးအစား (type) အများကြီးကို သတ်မှတ်နိုင်ပါတယ်။
// ဥပမာ string | number ဆိုရင် variable က string ဖြစ်နိုင်တယ်၊ number ဖြစ်နိုင်တယ်ဆိုတာကို ဆိုလိုပါတယ်။ 
// Union types ကို သုံးတဲ့အကြောင်းကတော့ multiple types ကို single variable တွေမှာအသုံးပြုလိုတဲ့အခါ ဖြစ်ပါတယ်။ 
// ဥပမာ၊ function argument တွေ၊ return values တွေမှာ တစ်ပြိုင်နက် multiple types ကို စဉ်းစားပြီး အလုပ်လုပ်ဖို့ union types ကို အသုံးပြုပါတယ်။

let value3: string | number;

value3 = "Hello"; // OK
console.log(value3);
value3 = 42; // OK
console.log(value3);
// value3 = true;  // Error: Type 'boolean' is not assignable to type 'string | number'
// console.log(value3);


function display(value:string | number):void {
    console.log(value);
} 

display("Hello TypeScript");
display(100);
// display(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'


let nums: (number | string)[] = [1, "two", 3, "four"];
console.log(nums);


type User5 = {
    id : number | string;
    name : string;  
    age : number | string;
};

let user99:User5 = {id:1, name:"kyaw", age:20};