let fun1=() => {
    console.log("This is fun1");
};  //function defination (define arrow function)
fun1(); //function call

console.log("This is outside the function");
fun1()

let info = (name,age) => {
    console.log("My name is " + name + " and I am " + age + " years old.");
};
info("John", 30);
info("Sita", 25);

// default parameters
// value pass huncha aafai if we don't pass any value while calling the function
let fun2 = (name="Unknown",age="21",country="Nepal") => {
    console.log(name,age,country);
};
fun2("Tanisha");
fun2(); // calls the function with default values

let info2=()=>{
    console.log("This is info2 function");
    return "b";
    console.log("c");
};
info2();
let i=info2();
console.log(i); // it will print "b" and not "c" because return statement is used to exit the function and return a value


let canVote=(age1)=>{
    if(age1>=18){
        return "can Vote";
    } else {
        return "cannot vote";
    }
};

let _canVote= canVote(10);
console.log(_canVote);
_canVote= canVote(20);
console.log(_canVote);



let prepo=(gender)=>{
    if(gender==="male"){
        return "He";
    } else if(gender==="female") {
        return "She";
    }
    else {
        return "They";
    }
};
let _prepo= prepo("female");
console.log(_prepo);

// Array of different data types
let name=["Tanisha","Swornima",20,true];
console.log(name[0]);
console.log(name);
name[0]="Sita";
console.log(name);

name.push("are you insane?"); // push method le array ko last ma value add garna help garcha
name.push("100%");
console.log(name);
name.pop(); // pop method le array ko last ma value haraucha
console.log(name);
name.unshift("Hello"); // agadi ma add huncha
console.log(name);
name.shift(); //agadi ko value  haraucha
console.log(name);

let arr = [1, 2, 4, 5];

// Insert 3 at index 2
arr.splice(2, 0, 3); //array.splice(startIndex, deleteCount, newItem);

console.log(arr);

//object
let people ={
    name:"Tanisha", //name is the key and "Tanisha" is the value
    age:20,
    city:"Kathmandu"        
};
console.log(people.name);
console.log(people.age);
console.log(people);
console.log(people["city"]);
people.city="Damak";
console.log(people);
people.college="Cosmos";
console.log(people);
delete people.age; // delete keyword le object ko property delete garna help garcha
console.log(people);

let people2="Swornima";
export default people2; //default export garne tarika