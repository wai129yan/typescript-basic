//simple type

type StringOrNumber = string | number ;

const value1 : StringOrNumber = "Hello";
const value2 : StringOrNumber = 42;

console.log(value1)
console.log(value2)

//type with union

type UserInput = string | number;

function processInput(input: UserInput) {
    if (typeof input === 'string') {
        console.log('Processing string:', input);
    } else {
        console.log('Processing number:', input);
    }
}

processInput('Hello World');
processInput(67);


//state manage with union types


type RequestState =
    | { status: 'loading' }
    | { status: 'success', data: string }
    | { status: 'error', message: string };

function renderRequest(state: RequestState) {
    switch (state.status) {
        case 'loading':
            return 'Loading ...';
        case 'success':
            return `Success :  ${state.data}`;
        case 'error':
            return `Error: ${state.message}`;
    }
}

const loadingState: RequestState = { status: 'loading' };

console.log(renderRequest(loadingState));


//authentication

type UserRole = 'Admin' | 'User' | 'Guest';

function getUserPermissions(role: UserRole) {
    switch (role) {
        case 'Admin':
            return 'Full access to all resources';
        case 'User':
            return 'Limited access to resources';
        case 'Guest':
            return 'Read-Only access';
    }
}

console.log(getUserPermissions('Admin'));


type FormFieldValue = string | boolean;

function validateField(value: FormFieldValue) {
    if (typeof value === 'string') {
        return value.length > 0 ? 'Valid Input' : 'Invalid Input';
    } else {
        return value ? 'Checked' : 'Unchecked';
    }
}

console.log(validateField('Hello'));
console.log(validateField(''));
console.log(validateField(true));



//error handling

type MyFormData = {
    username: string;
    age: number;
    isSubscribed: boolean;
};

function validateForm(data: MyFormData): boolean {
    if (!data.username || data.age <= 0 || !data.isSubscribed) {
        return false;
    }
    return true;
}

const formData: MyFormData = {
    username: "koko",
    age: 30,
    isSubscribed: true,
};


if (validateForm(formData)) {
    console.log("Form is valid");
} else {
    console.log("Form is invalid");
}





















































