//asynchronous read file and write file

const { readFile, writeFile } = require("fs");

//readFile
//read data from file asynchronously
//takes file path as first parameter and takes call back function as second parameter. callback function has two parameters error and result

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
    //this is where functionality is written
    //we are getting a buffer object, so we need to pass the encoder i.e utf-8 as a parameter to readfile function
    //result is accessible only within this function
    const first = result; //storing the result in a variable
    readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        console.log(`result ${first} + ${second}`);
        //we cannot do readFile for second file outside b.c we don't have access to first result
        //writeFile
        writeFile(
          "./content/async-result.txt",
          `The async result of first and second : ${first} , ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("result in writeFile", result);
            //result is undefined but a async-result.txt file is created
          } //we need to pass a callback function
        );
      }
    });
  }
});

//all of the above causes callback hell
