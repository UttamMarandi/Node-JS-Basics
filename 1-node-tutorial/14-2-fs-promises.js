//alternative to util promisify
const { readFile, writeFile } = require("fs").promises;

//fs.promises works the same as util promisify

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/writeUsingFsPromises.txr",
      `Write using fs promises ${first}, ${second}`
    ); //no need to store in a varibale as it return undefined
  } catch (err) {
    console.log(err);
  }
};

start();
