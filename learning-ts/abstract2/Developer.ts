import { Entity } from "./Entity";
import { ProgrammingLanguage } from "./ProgrammingLanguage";

export class Developer extends Entity {
    constructor(
        id: string,
        name: string,
        public favoriteLanguage: ProgrammingLanguage
    ) {
        super(id, name);
    }

    getDescription(): string {
        return `Developer:${this.name},Favorite Language:${this.favoriteLanguage.name}
        Paradigm is (${this.favoriteLanguage.paradigm})`;
    }
    displayFavoriteLanguage(): void {
        this.favoriteLanguage.displayInfo();
    }
}

const js = new ProgrammingLanguage("1", "JavaScript", "Multi-paradigm");
const pythonLang = new ProgrammingLanguage("2", "Python", "OOP");
const python = new Developer("2", "Bob", pythonLang);
const dev1 = new Developer("1", "Alice", js);

console.log('dev1', dev1);
console.log('python', python);
dev1.displayInfo();
dev1.displayFavoriteLanguage();