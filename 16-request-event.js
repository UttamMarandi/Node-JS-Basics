const http = require("http");
const server = http.createServer();

// const server = http.createServer((req, res) => {
//   res.end("Welcome using normal createServer");
// });

//Using Event Emitter API

//we are listening for request event. request is a prebuilt event for server
//emits request event
//server has method on, and we listen to request event
server.on("request", (req, res) => {
  console.log("Requset event");
  res.end("Welcome");
});

server.listen(5000);
