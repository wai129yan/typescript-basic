import { Developer } from "./Developer";
import { Entity } from "./Entity";
import { ProgrammingLanguage } from "./ProgrammingLanguage";



export class Company extends Entity {
    constructor(
        id: string,
        name: string,
        public developers: Developer[]
    ) {
        super(id, name);
    }
    getDescription(): string {
        return `Company: ${this.name},Number of Developers:${this.developers.length}`;
    }

    displayDevelopers(): void {   //company own
        this.developers.forEach(dev => {
            dev.displayInfo();
        })
    }
}

const js = new ProgrammingLanguage("2", "JavaScript", "Object-Oriented");
const python = new ProgrammingLanguage("3", "Python", "OOP");

// console.log(js);
// console.log( js.getDescription());
 // console.log(python);
const dev1 = new Developer("1", "Kyaw Wai Yan", js);
const dev2 = new Developer("2", "Aung Aung", python);

const company = new Company("1", "Google", [dev1, dev2]);

//console.log(dev1);
company.displayDevelopers();


// //console.log(company);
// company.displayDevelopers();

// company.developers.forEach(dev => {
//     dev.displayInfo();
// })

// company.developers.forEach(dev => {
//     console.log(dev.name,dev.favoriteLanguage.name);
// })

// company.developers.forEach(dev => {
//     console.log(dev.name, dev.favoriteLanguage.name);;
// })