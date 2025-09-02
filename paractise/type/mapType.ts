type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

type ReadOnlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

const person: ReadOnlyPerson = {
  name: "John",
  age: 30,
  isActive: true,
};

// person.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.


interface User 
{
    id : number;
    name : string;
    email : string;
}

type Nullable <T> = {
    [K in keyof T] : T[K] | null;
};

type NullableUser = Nullable<User>;

const user: NullableUser = {
  id: 1,
  name: "Alice",
  email: null,  // email is allowed to be null
};

console.log(user);



interface Product 
{
    name:string;
    price:number;
    description:string;
    instock:boolean;
}

type ReadOnlyProduct = {
    readonly [K in 'name' | 'price'] : Product[K];
} & Omit < Product , 'name' | 'price'>;

const product : ReadOnlyProduct = {
    name :"Laptop",
    price:1000,
    description:"A high-end laptop",
    inStock:true,
}


product.description = "A new high-end laptop";


































