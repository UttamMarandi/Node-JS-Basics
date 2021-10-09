const http = require("http");
const fs = require("fs");
const { readFileSync } = fs;

const server = http.createServer((req, res) => {
  const text = readFileSync("./content/bigFile.txt", "utf-8");
  res.end(text);
});
server.listen(5000);
