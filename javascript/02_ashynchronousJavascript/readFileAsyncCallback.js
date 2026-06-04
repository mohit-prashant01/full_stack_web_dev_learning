/*Read a file asynchronously, callback concept
  when a file is read asynchronously the readFile method callbacks a function when the task of reading content is done called callback
*/

const fs= require("fs");

function afterReadFile(err,data){
    console.log(data);
}

fs.readFile("a.txt","utf-8",afterReadFile);
fs.readFile("b.txt","utf-8",afterReadFile);

console.log("Done ")
