enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
}

interface AuthorInterface {
    userId: number;
    userName: string;
    gender: Gender;
}

interface CategoryInterface {
    catId: number;
    categoryName: string;
}
interface PostInterface {
    id: number;
    title: string;
    description: string;
    extra: AuthorInterface[] | CategoryInterface[];
}

let post1: PostInterface = {
    id: 1,
    title: "post 1",
    description: "this is post 1",
    extra: [
        {
            userId: 1,
            userName: "john",
            gender: Gender.MALE,
        },
        {
            userId: 2,
            userName: "jane",
            gender: Gender.FEMALE,
        }



    ]
}

console.log(post1.extra[0]);
let extra = post1.extra;
console.log("extra", extra[0]);
//console.log(post1.extra[0].userName);


let post2: PostInterface = {
    id: 2,
    title: "post 2",
    description: "this is post 2",
    extra: [
        {
            catId: 1,
            categoryName: "category 1",
        },
        {
            catId: 2,
            categoryName: "category 2",
        }
    ]
}

console.log("post2", post2);

