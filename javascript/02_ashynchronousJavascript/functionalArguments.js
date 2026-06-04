/*Functional Arguments - > Passing a function to another function as an argument */

function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function doOperation(a,b,op){
    return op(a,b);
}

console.log(doOperation(10,5,sum));         // 15
console.log(doOperation(10,5,subtract));    // 5
console.log(doOperation(10,5,multiply));    // 50
console.log(doOperation(10,5,divide));      // 2
