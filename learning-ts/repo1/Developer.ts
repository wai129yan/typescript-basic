import { ProgrammingLanguage } from "./ProgrammingLanguage";

export class Developer {
    constructor(
        public id: string,
        public name: string,
        //public favoriteLanguage: ProgrammingLanguage,
        public favoriteLanguage: ProgrammingLanguage[],
    ) { }
}

let dev1 = new Developer("1", "Kyaw Wai Yan", [new ProgrammingLanguage("1", "PHP", "Procedural")]);
//console.log(dev1);