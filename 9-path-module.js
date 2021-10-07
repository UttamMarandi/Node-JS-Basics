//path module

const path = require("path");

//.sep
console.log(path.sep); //logs the directory path separator. in our case it is \
//note path.sep is not a function

//path.filePath

const filePath = path.join("content", "subfolder", "file.txt");
console.log(filePath);
//joins the path given in parameter . parameter elements should be string. joined using the "\" path separator

//access onle file.txt
//path.basename(file path)
const base = path.basename(filePath); //logs file.txt
//basename gives the end file/folder in the  file path.
console.log(base);

//path.resolve
//find absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "file.txt");
console.log("absolute", absolute);
//gives the absolute path, required b.c app runs on multiple machines and every machine can have diffrent path.
const absoluteUsingJoin = path.join(
  __dirname,
  "content",
  "subfolder",
  "file.txt"
);

console.log("absoluteUsingJoin", absoluteUsingJoin);
//logs the same as path.resolve(), maybe some other usage
