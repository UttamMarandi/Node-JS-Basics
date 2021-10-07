//Common JS : Every file in node is a module by default
//Modules : Only share minimum, Encapsulated code

sayHi("Susan");
sayHi(john);
sayHi(peter);
//variable john and peter are stored in other file and the function sayHi() is also stored in another file. so this will not work
//sayHi is not defined
