// fs : file modules
//file module using two ways :
//1.non-blocking : asynchronous
//2.blocking : synchronous

//2.BLOCKING : synchronous
const { readFileSync, writeFileSync } = require("fs"); //get modules using destructuring

//readFileSync()
//reads data from the provided file
//takes two parameters , filepath and other one is encoder generally utf-8 for text
const firstData = readFileSync("./content/first.txt", "utf-8");

console.log("firstFileData", firstData);

const secondData = readFileSync("./content/second.txt", "utf-8");

console.log("secondData", secondData);

//writeFileSync()
//creates a new file and stores the second parameter
//take two parameters first being the file path, and second the value

writeFileSync(
  "./content/third.txt",
  `The result of first and second ${firstData} ${secondData}`
);
//create third.txt and store the second parameter value
//if file is already present , then writeFileSync will overwrite what is present in the file

//append to file instead of overwrite
writeFileSync(
  "./content/third.txt",
  `The append result of first and second is ${firstData} ${secondData}`,
  { flag: "a" } //pass an object with key flag and value a to append file
);
