import { Company } from "./Company";
import { Developer } from "./Developer";
import { ProgrammingLanguage } from "./ProgrammingLanguage";
import { Repository } from "./Repository";


const java = new ProgrammingLanguage("1", "Java", "Object-Oriented");
const js = new ProgrammingLanguage("2", "JavaScript", "Object-Oriented");
const python = new ProgrammingLanguage("3", "Python", "OOP");
const ruby = new ProgrammingLanguage("4", "PHP", "OOP");
const c = new ProgrammingLanguage("5", "C", "Procedural");
const language = new Repository<ProgrammingLanguage>();

console.log("before add", language)
// language.add(java);
// language.add(js);
// language.add(python);
// language.add(ruby);
// language.add(c);
// console.log(language.getAll());
// console.log("after add", language)

// console.log("after add data", language)
// console.log(language.remove("4"));
// console.log(language.getAll());

// const item = language.get("2");
// console.log(item);

const bobo = new Developer("1", "Bobo", [java, js]);
const nono = new Developer("2", "Nono", [js, python]);
const john = new Developer("3", "John", [js, ruby]);
const popo = new Developer("4", "Popo", [c, ruby]);

const developer = new Repository<Developer>();
// console.log("before developer repo", developer);
// //create developer object
// developer.add(bobo);
// developer.add(nono);
// developer.add(john);
// developer.add(popo);
// console.log("after developer repo", developer);

// let dev1 = developer.get("1");
// console.log(dev1);
// developer.remove("2");

// console.log('object :', developer.get("2"));
// console.log(developer.getAll());


const apple = new Company("1", "Apple", [bobo, nono]);
const google = new Company("2", "Google", [john, popo]);
const tiktok = new Company("3", "TikTok", [bobo, popo]);
const company = new Repository<Company>();
//console.log("company before =>", company);
company.add(apple);
company.add(google);
company.add(tiktok);
//console.log("company after =>", company);

console.log("company after =>", company.getAll());
console.log("*********");
console.log("company after =>", company.getAll()[0]);
console.log("*********");
console.log("company after =>", company.getAll()[0].developers);
console.log("*********");
console.log("company after =>", company.getAll()[0].developers[0]);
console.log("*********");
console.log("company after =>", company.getAll()[0].developers[0].favoriteLanguage[0].name);
console.log("*********");
console.log("company after =>", company.getAll()[0].developers[0].favoriteLanguage[0].paradigm);
console.log("*********");

company.getAll().forEach((company) => {
    console.log(company.name)
    company.developers.forEach(dev => {
        console.log(dev.name, dev.favoriteLanguage.map(lang => lang.name));
    })
})


