import { college } from "./destructors.mjs";
import people2 from "./function.mjs";
import country, { age, name } from "./index.mjs";
//to import console.log(word)ko last letter ma gayera control+space le auto import garna sakincha
console.log(name);
console.log(age);
console.log(college);
console.log(country);
//{}refers to the named export and no brackets means default export
//Euta file ma multiple named export garna sakincha but only one default export garna sakincha
console.log(people2);




//String

console.log("Tanisha");
console.log('Swornima');
console.log (`Sita`); //backticks le string ma variable use garna help garcha
let nameeeeee="Tanisha";
let ageeeeee=21;

let info=`my name is ${nameeeeee} and I am ${ageeeeee} years old`; //string interpolation
console.log(info);
let info2="my name is ${nameeeeee} and I am ${ageeeeee} years old";
console.log(info2);