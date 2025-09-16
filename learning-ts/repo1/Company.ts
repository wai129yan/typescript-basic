import { Developer } from "./Developer";
import { ProgrammingLanguage } from "./ProgrammingLanguage";

export class Company {
    constructor(
        public id: string,
        public name: string,
        public developers: Developer[]
    ) { }
}
// let js = new ProgrammingLanguage("1", "JavaScript", "Object-Oriented");
// let php = new ProgrammingLanguage("2", "PHP", "OOP");
// let dev1 = new Developer("1", "Kyaw Wai Yan", [js, php]);
// let dev2 = new Developer("2", "Aung Aung", [js]);

// let company = new Company("1", "Google", [dev1, dev2]);

// console.log(company);

// company.developers.forEach(dev => {
//     //console.log(dev);
//     console.log(dev.name, dev.favoriteLanguage.map(lang => lang.name));
// })