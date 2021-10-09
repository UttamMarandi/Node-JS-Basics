//npm packages : reusable code is called packages
//module , dependency and packages are used interchanebly

//local dependency - use it only in this particular project
//npm i <packageName> //i for install

//global dependency - use it in any project
//npm install -g <packageName>
//npm i -g <packageName>

//package.json : manifest file (store important info about project/package)
//package.json can be created in three ways
//manually create the file
//npm init
//npm init -y (y for yes to all)

//all the npm packages installed is stored within dependecies property

//if a package is dependent on other packages , then those packages will also get installed

//use the module

const _ = require("lodash"); //declare lodash

const items = [1, [2, [3, [4]]]]; //array within arrays

//flat the array
//loadash.flattenDeep() : returns single array for array within arrays

const singleArray = _.flattenDeep(items);
console.log("singleArray", singleArray);
console.log("hello people");

//save a package as dev dependecy
//we don't need these packages in our production
//testing packages
//npm i <packageName> -D
//npm i <packageName> --save-dev

//nodemon
//install nodemon as dev dependecies
//in package.json define dev : nodemon app.js
//run npm run dev in shell
//nodemon will watch for changes in our app like a liveserver

//install packages globally
//npm install -g <packageName>

//package.lock.json
//stores all the version of all the packages and their dependencies
