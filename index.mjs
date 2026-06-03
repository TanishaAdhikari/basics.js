export let name="Tanisha";
export let age=21;
/* export garne tarika
 export by name
 export by default */
 let country="Nepal";
 export default country; //default export garne tarika

 //error handling
    try{
        // code that might throw an error
        console.log("This is a try block.");
        console.log(hwllo);
    }
     catch (error) {
        console.error("An error occurred:", error);//code to handle and show the error message
    }

    try{
        console.log(people);
        console.log("This is another try block.");
    }
    catch(error){
        console.log("I am catching the error");
        console.log(error.message);
    }
