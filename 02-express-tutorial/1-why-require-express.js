const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
const homeLogo = readFileSync("./navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  //provide metadata
  res.writeHead(200, { "content-type": "text/html" });
  //200 is the status code , meaning request(req) was successful and 2nd parameter is an object mentioning content type also known as media type
  //response is what is send from sever to client

  //this callback function runs every time the user hits the server
  // console.log("user hit the server"); //this logs the moment user/client send a request to the server
  //   res.write("<h1>Home Page</h1>");
  //body of the response in res.write()

  //res.end() method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.
  //if we don't mention res.end() then the browser keeps on loading and causes a timeout
  //it shows that the communication is over
  //conditional render based on url
  const url = req.url;
  if (url === "/") {
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.write("About Page");
    res.end();
  }
  //Check the url for each utility file
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("Opps page not found");
    res.end();
  }
});

server.listen(5000);

//we have a problem
//while accesing navbar/index.html , that page make three more req to internal files. But those files are not being handled in app.js
//note : external files, like bootstrap causes no problem. Internal files like styles.css, browser-app.js , and logo are in our server.

//so we have to import/require all those internal files and resources for it to work
//That's why we need express server
