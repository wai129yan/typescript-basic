type UserType<T> = {
    name:T;
    age : number;
    extra: T[];
}

let User1:UserType<string> = {
    name:"koko",
    age: 44,
    extra:["agag","mama"]
}

console.log(User1);
console.log("*****************");

console.log(`Test is : ${JSON.stringify(User1)}`);
console.table(User1);



for (const [key, value] of Object.entries(User1)) {
  console.log(`${key}: ${value}`);
}


console.log(`
User Info:
-----------
Name : ${User1.name}
Age : ${User1.age}

`);

console.log("****************");



interface AForm<T,U> {
    name:T;
    age:U;
    email:T;
    password:T;
    extra:T[];
    address:{
        street:T,
        city:T,
        postalCode?:U
    }
}

let loginForm:AForm<string,number> = {
    name:"agag",
    age:40,
    email:"koko@gmail.com",
    password:"12345",
    extra:["bob","nono"],
    address:{
        street:"meino",
        city:"fuku",
    }
}

console.table(loginForm);

console.log("******************");

function infoU<T,U>(obj1:T,obj2:U): T & U {
    return {...obj1, ...obj2};
}

const userOne = infoU(
    {name:"agag",gender:"male",age:30,phone:"000000000"},
    {name:"bbc", age:48,phone:"999999999"}
)

console.log(userOne);

console.log("*************");


// type IsString<T> = T extends string ? 'YES':'NO';

// type A =  IsString<'Hello'>;
// type B =  IsString<123>;


//RunTime Version

function isString(value: unknown): 'YES' | 'NO' {
    return typeof value === 'string' ? 'YES' : 'NO';
}

console.log('Value :', isString('Hello'));
console.log('Value :', isString(123));


console.log("***********");

