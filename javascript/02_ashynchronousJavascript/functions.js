/*Function to find sum of two numbers */

// function sum(a,b){
//     return a+b;
// }

// let res = sum(5,6);
// console.log(res);


/*Find sum from 1 to a number */

function sum(n){
    let res = 0;
    for(let i=1;i<=n;i++){
        res+=i;
    }
    return res;
}

let res = sum(10);
console.log(res);