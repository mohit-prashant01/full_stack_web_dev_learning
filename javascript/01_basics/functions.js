

/*Function */
// let name="Mohit";
// function greet(){
//     console.log("Hello "+name);
// }
// greet();



/*Function Sum */

// function sum(a,b){
//     return a+b;
// }

// let a=6;
// let b=9;

// let ans= sum(a,b);
// console.log("Sum = ",ans);



/*Condition Statements if-else */

let person1={
    name:"Mohit",
    age:26
};


let person2={
    name:"Parahant",
    age:16
};


function canVote(person){
    if(person.age>=18){
        console.log(person.name+ " can Vote");
    }
    else{
        console.log(person.name+" cannot Vote");
    }
}

canVote(person1);
canVote(person2);
