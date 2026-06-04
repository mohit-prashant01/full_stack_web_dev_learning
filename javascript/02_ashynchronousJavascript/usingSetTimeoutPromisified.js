/*Promise in javascript is an object that represents the eventual conpletion (or failure) of an asynchronous operation and its resulting value */




/*Using Callback function */

// function callBack(){
//     console.log("Call back function called")
// }


// setTimeout(callBack,3000)







// /*Promise class  */

// function random(resolve){
//     setTimeout(resolve,4000)
// }


// function setTimeoutPromisified(ms){
//     return new Promise(random);
// }


// function callback(){
//     console.log("Call back called");
// }

// setTimeoutPromisified(5000).then(callback);






/*Using promises */



// function callBack(){
//     console.log("Call back function called")
// }

// function setTimeoutPromisified(ms){
//     return new Promise(resolve=> setTimeout(resolve,ms));
//     //returning object of Promise class
// }




// setTimeoutPromisified(3000).then(callBack);



function setTimeoutPromisified(ms){
    let p =  new Promise((resolve)=>setTimeout(resolve,ms));
    return p;
}

console.log("Start");
let promiseObj = setTimeoutPromisified(5000);
promiseObj.then(()=>console.log("Completed"));