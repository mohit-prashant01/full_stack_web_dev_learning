/*if statement */

let age = 22;
if(age>=18){
    console.log("Adult");
}


/*if-else */

age = 15;
if(age>=18){
    console.log("Adult");
}
else{
    console.log("Minor");
}


/*Ternary Operator */

age = 36;
let res = (age>=18)?"Can Vote":"Cannot Vote";
console.log(res);


/*Switch-case */

let day=9;

switch(day){
    case 1 :console.log("Monday");
        break;
    case 2 :console.log("Tuesday");
        break;
    case 3 :console.log("Wednesday");
        break;
    case 4 :console.log("Thursday");
        break;
    case 5 :console.log("Friday");
        break;
    case 6 :console.log("Saturday");
        break;
    case 1 :console.log("Sunday");
        break;
    default :console.log("Invalid Day");
}

