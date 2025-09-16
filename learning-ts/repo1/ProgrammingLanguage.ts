export class ProgrammingLanguage {
    constructor(
        public id: string,
        public name: string,
        public paradigm: string,
    ) { }
}

let js = new ProgrammingLanguage("1", "JavaScript", "Object-Oriented");
//console.log(js.name);