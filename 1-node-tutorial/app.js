//Implemenet createReadStream
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream("./content/bigFile.txt", "utf-8");
  //open event opens a readable stream
  fileStream.on("open", () => {
    fileStream.pipe(res); //if we can read data , we can write data using pipe()
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
});
server.listen(5000);

//In headers under network section
// Transfer-Encoding: chunked
//meaning we are sending data to client in chunks
