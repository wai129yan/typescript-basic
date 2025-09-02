// type Employee = {
//     name: string;
//     position: string;
// };

// type Contact = {
//     email: string;
//     phone: string;
// };

// type EmployeeContact = Employee & Contact;

// const employee: EmployeeContact = {
//     name: "Alice",
//     position: "Developer",
//     email: "alice@gmail.com",
//     phone: "12345678",
// };

// console.log(employee);  // Corrected



interface User {
    id: number;
    username: string;
}

interface Account {
    accountType: 'premium' | 'free';
    createdAt: Date;
}


interface Contact {
    email: string;
    phone: string;
}

type UserProfile = User & Account & Contact;

const UserProfile: UserProfile = {
    id: 1,
    username: 'alice123',
    accountType: 'premium',
    createdAt: new Date(), //question
    email: 'alice@example.com',
    phone: '444-333-444'
};

console.log(UserProfile);


console.log('*************');



interface DatabaseModel 
{
    id:number;
    createdAt:Date;
    updatedAt:Date;
}

interface Loggable
{
    log:(message:string) => void;
}

type LoggableDatabaseModel = DatabaseModel & Loggable;

class UserModel implements LoggableDatabaseModel 
{
    id: number;
    createdAt: Date;
    updatedAt: Date;


    constructor(id:number,createdAt:Date,updateAt:Date)
    {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }

    log(message:string)
    {
        console.log(`Log for User Model [ID:${this.id}]:${message}`);
    }
}


const user = new UserModel(1,new Date(),new Date());
user.log('User updated');
user.log('Testing');












