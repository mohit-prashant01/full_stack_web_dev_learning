// function setTimeoutPromisified(ms,value){
//     return new Promise((resolve)=>setTimeout(()=>resolve(value),ms))
// }

// setTimeoutPromisified(2000).then(()=>console.log("Callback called"))






/*CALL BACK HELL */

/*
 Print Hi after 1 sec
 Print Hello after 3 second of step 1
 Print Hello there after 5 second of step 2
*/

    // setTimeout(function (){
    //     console.log("hi");
    //     setTimeout(function (){
    //         console.log("hello");
    //         setTimeout(function (){
    //             console.log("hello there")
    //         },5000)
    //     },3000)
    // },1000)




/*SOLVING THIS PROBLEM WITHOUT CALLBACK HELL*/
// setTimeout(()=>(console.log("hi")),1000)
// setTimeout(()=>(console.log("hello")),4000)
// setTimeout(()=>(console.log("hello there")),9000)




/* PROMISIFIED VERSION */

// function setTimeoutPromisified(ms){
//     return new Promise((resolve)=>setTimeout(resolve,ms));
// }

// setTimeoutPromisified(1000)
//     .then(()=>{
//         console.log("hi");
//         return setTimeoutPromisified(3000);
//     })
//     .then(()=>{
//         console.log("hello");
//         return setTimeoutPromisified(5000);
//     })
//     .then(()=>{
//         console.log("hello there");
//     })




/*USING ASYNC AWAIT */

function setTimeoutPromisified(duration){
    return new Promise((resolve)=>{setTimeout(resolve,duration)});
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hello there");
}

solve()