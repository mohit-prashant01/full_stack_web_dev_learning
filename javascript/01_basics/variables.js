// var name = "Mohit";
// var age = 26;
// var isStudent = true;

// console.log(name);
// console.log(age);
// console.log(isStudent);



// //Variable defined using var can be redeclared javascript is dynamically typed so can be reassigned to any data type value
// var name = "mohit";
// name = 10;
// name=true;

// console.log(name);





/*
Ways of creating a variable:
var - function scoped
let - blocked scoped
const - block scoped
*/


// function greet(){
//     var name="mohit";
//     if(true){
//         console.log(name);
//         name="rahul";          //Re-initialize
//         console.log(name);

//         var name="prashant"; //Re-declaration
//         var age=26;

//     }
//     console.log(name);
//     console.log(age);  //var is function scoped so the age is accessible inside the fuction anywhere
// }

// greet();



/*
const declares constant variable, to make code stricter
*/

// const pi =3.14;
// console.log(pi);
// // pi=3.142545;   //Produce TypeError -> Assignment to constant variable 
// console.log(pi);



/* let is another way to create variables, let is block scoped, it can be reassigned but cannot be redeclared */

// let name="mohit";
// let age=24;
// console.log(name);
// console.log(age);

// function greet(){
//     console.log(name);
//     if(true){
//         let isStudent = true;
//         console.log(isStudent); //Accessible here
//     }
//     console.log(isStudent);   //Reference error -> isStudent is not defined as let is block scoped it is accessible inside the block only 
// }

// greet();




/*Object -> key value pairs */

// let person = {
//     name:"Mohit",
//     age:26
// };

// console.log(person.name);
// console.log(person.age);



/*Arrays - >  declration  */

// let arr = [1,2,3,4];
// console.log(arr[0]);
// // console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// arr[2]=9999;
// console.log("Value at index 2 :",arr[2]);
