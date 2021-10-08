const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url == "/about") {
    //BLOCKING CODE
    //this code runs for a very long time and as long as the result is not found we cannot run other code
    //that's why we should always use asynchronous code

    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`Value within loop ${i} ${j}`);
      }
    }
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(5000, () => {
  //callback runs after the immediate code is executed , in this case creating a server
  console.log("server is listening port 5000....");
});
