/*setTimeout(callback,delay)  is an asynchrounous function  */

// console.log("Hi");

// function timeout(){
//     console.log("Timeout function called")
// }

// setTimeout(timeout,5000);

// console.log("Last line");




/*Code to understand the execution of async codes */

function timeout(){
    console.log("Timeout function called");
}

console.log("Hi");

setTimeout(timeout,1000);

let c=0;
for(let i=0;i<1000;i++){
    c+=1;
}
console.log("Expensive Operation carried out")