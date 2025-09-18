import { Entity } from "./Entity";

export class ProgrammingLanguage extends Entity {
    constructor(
        id: string,
        name: string,
        public paradigm: string
    ) {
        super(id, name)
    }
    getDescription(): string {
        return `Programming Language is here: ${this.name},Paradigm:${this.paradigm}`;
    }
}

const java = new ProgrammingLanguage("1", "Java", "Object-Oriented");
// console.log('java', java);
//java.displayInfo();
console.log(" - - - - - - - ");
java.getDescription();

console.log("*********");

// const js = new ProgrammingLanguage("2", "JavaScript", "Object-Oriented");
// console.log('js', js);
// js.displayInfo();