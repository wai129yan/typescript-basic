enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
}
interface UserInterface {
    id: number,
    userName: string,
    email: string,
    password: string,
    age: number,
    job?: "developer" | "designer" | "manager",
    gender: "male" | "female",
    address: {
        street: string,
        city: string,
        postalCode?: number,
    }
}

const user: UserInterface = {
    id: 1,
    userName: "john",
    email: "john@example.com",
    password: "123456",
    age: 20,
    job: "developer",
    gender: "male",
    address: {
        street: "123 Main St",
        city: "Anytown",
        // postalCode: 12345,
    }
}

console.log(user)

interface WorkerInterface extends UserInterface {
    salary: number,
    company: string,
    companyAddress: {
        street: string,
        city: string,
        postalCode?: number,
    },
}

const bobo: WorkerInterface = {
    id: 1,
    userName: "bobo",
    email: "bobo@example.com",
    password: "123456",
    age: 20,
    job: "developer",
    gender: "male",
    address: {
        street: "123 Main St",
        city: "Anytown",
        // postalCode: 12345,
    },
    salary: 5000,
    company: "ABC Inc.",
    companyAddress: {
        street: "456 Main St",
        city: "Anytown",
        // postalCode: 54321,
    },
}

console.log(bobo)