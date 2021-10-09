//Common JS : Every file in node is a module by default
//Modules : Only share minimum, Encapsulated code

const names = require("./4-names");
//access anything that is exported from 4-names
console.log(names);
//we can access john and peter now
const sayHi = require("./5-utils");
console.log(sayHi);

//noy we can access sayHi function too , but john & peter varibale is still not accessible as we exported them in an object
//we can destructure it or use . operator
const { john, peter } = names;

const data = require("./6-alternative-flavor");
console.log(data);
//both items and singlePerson is exported and availaible here

require("./7-mind-granade"); //this file do not have module.exports

//still the function addValues() runs
//meaning when we import a file using require we actually invoke it. so code in that file will run as if it is this file code.

sayHi("Susan");
sayHi(john);
sayHi(peter);
//variable john and peter are stored in other file and the function sayHi() is also stored in another file. so this will not work
//sayHi is not defined
