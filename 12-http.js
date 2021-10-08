//http module
const http = require("http");

//create a  server
//createServer() : takes a callback function with req and res as parameters
//req: incoming request
//res : response is what is being sent
//server listen to request

const server = http.createServer((req, res) => {
  //   console.log(req);
  //req is a giant object containing various data including .url
  if (req.url === "/") {
    //meaning is request is sent from homepage , then run the following code
    res.end("Hello, this is our homepage"); //end the response
  } else if (req.url === "/about") {
    res.end("Hello, this is about page"); //we don't necessarily need to wirte , we can pass data inside .end() too
  } else {
    res.end(`<h1>Oops,No page found</h1> <a href="/"> Back to home</a>`);
  }
});

//listen to a port
server.listen(5000);

//bug fix:
//on passing condition with only if statement we have error : ERR_STREAM_WRITE_AFTER_END
// use else if instead
