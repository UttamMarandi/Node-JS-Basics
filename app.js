const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event"); //logs on first load or when port page is refreshed
  res.end("Hello World"); //after createServer run this
});

//server.listen() is async
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
