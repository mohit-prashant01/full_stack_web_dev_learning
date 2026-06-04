/*Using a class */

//Syntax:
//  let varname = new ClassName(value1,value2,...)
//    varname.classProperty = value;
//    varname.classMethod();


//Usinig predefined classes Map and Date


let now = new Date();
console.log("Date :"+now.getDate());
console.log("Time :"+now.getTime());
console.log("Month :"+now.getMonth());
console.log("Day :"+now.getDay());
console.log("Date :"+now.getDate());



//Map class is like map in c++ used to create key value pairs

let mp = new Map();
mp.set("name","Mohit");
mp.set("age",22);
console.log(mp.get("name"))
console.log(mp.get("age"))



