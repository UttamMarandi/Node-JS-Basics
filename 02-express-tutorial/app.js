const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  //provide metadata
  res.writeHead(200, { "content-type": "text/html" });
  //200 is the status code , meaning request(req) was successful and 2nd parameter is an object mentioning content type also known as media type
  //response is what is send from sever to client

  //this callback function runs every time the user hits the server
  console.log("user hit the server"); //this logs the moment user/client send a request to the server
  //   res.write("<h1>Home Page</h1>");
  //body of the response in res.write()

  //res.end() method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.
  //if we don't mention res.end() then the browser keeps on loading and causes a timeout
  //it shows that the communication is over
  //conditional render based on url
  const url = req.url;
  if (url === "/") {
    res.write("Home Page");
    res.end();
  } else if (url === "/about") {
    res.write("About Page");
    res.end();
  } else {
    res.writeHead(400, { "content-type": "text/html" });
    res.write("Opps page not found");
    res.end();
  }
});

server.listen(5000);
