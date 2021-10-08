const { writeFile } = require("fs").promises;

const createFile = async () => {
  try {
    for (let i = 0; i < 10000; i++) {
      writeFile("./content/bigFile.txt", `Hello world every time ${i} \n`, {
        flag: "a",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

createFile();

//bug
//showing an error :async function without a catch block
// but code seems okay-- catch on later
