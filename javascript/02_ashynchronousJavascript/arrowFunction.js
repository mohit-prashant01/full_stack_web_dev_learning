/*Arrow functions are a concise way to write functions in JavaScript, introduced in ES6.

Advantages

Shorter syntax
Cleaner callback code
Implicit return for simple expressions
Inherits this from surrounding scope

Limitations

Cannot be used as constructors with new
Not suitable for object methods that rely on this
Do not have their own arguments object
*/



/*Traditional Function */

function add(a,b){
    return a+b
}

console.log(add(5,2))


/*Arrow Function */

const fun = (a,b)=>{
    return a+b
}

console.log(fun(5,6));

const greet = ()=>console.log("Hello")

greet();