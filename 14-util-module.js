const { readFile, writeFile, read, write } = require("fs");
const util = require("util");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("log using noraml readFile", res);
  }
});
//the problem occurs when we need to read from multiple files or basically do multiple asynchronous task.

//Promises
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

// use .then and .catch
getText("./content/first.txt")
  .then((result) => {
    console.log("log using .then .catch", result);
  })
  .catch((err) => console.log(err));

//using .then and catch for multiple async task is also messy, that's why better to use async await

const start = async () => {
  const data = await getText("./content/first.txt");
  console.log("log using async await", data);
};
start();

//use try catch for async await to handle error

const start2 = async () => {
  try {
    const data = await getText("./content/first.txt");
    console.log("log using async await try catch", data);
  } catch (err) {
    console.log(err);
  }
};

start2();

//read data from two files and write them in single file
//in order to do writefile , we have to create another wrapper promise.
//But that is hectic , so we use util module

const readWrite = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log("get data first and second", first, second);
  } catch (err) {
    console.log(err);
  }
};
readWrite();

//use util module to readfile
//easy and clean code
//convert readFile and writeFile module to promise

const readFilePromise = util.promisify(readFile); //wraps readfile inside a promise
const writeFilePromise = util.promisify(writeFile);

const getData = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf-8"); //this much only will read the file #clean_code
    const second = await readFilePromise("./content/second.txt", "utf-8");
    console.log("using util", `${first}, ${second}`);
    //write the file
    await writeFilePromise(
      "./content/writeUsingUtil.txt",
      `Data from first and second : ${first} , ${second}`
    );
  } catch (err) {
    console.log(err);
  }
};

getData();
