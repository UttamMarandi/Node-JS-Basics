const { writeFile } = require("fs").promises;
const { writeFileSync } = require("fs");

// const createFile = async () => {
//   try {
//     for (let i = 0; i < 100000; i++) {
//       writeFile("./content/bigFileB.txt", `Hello world every time ${i} \n`, {
//         flag: "a",
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// createFile();

//bug
//showing an error :async function without a catch block
// but code seems okay-- catch on later

for (let i = 0; i <= 100000; i++) {
  writeFileSync("./content/bigFileB.txt", `Hello world this many ${i} times`, {
    flag: "a",
  });
}

//file is not uploaded to github
