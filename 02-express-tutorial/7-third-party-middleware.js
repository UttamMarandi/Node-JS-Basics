//Middleware
//Each middleware function has access to both req and res object

//middleware sits in between request and response
//req =>middleware =>response

const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
//we pass the middleware as the second paramter between the route and the callback function
//express automatically pass the req,res and next parameter to middleware
//it's important for us to send data to the client through the middleware using res.send() or res.json() for it to work on the browser
//if we are not sending data to client then we have to pass the middleware to next middleware using next
app.use(express.static("./public")); //express middleware

app.use(morgan("tiny")); //third party middleware
//morgan logs the method , path and time

//pass middleware to all routes , app.use
app.use("/api", [logger]); //executed in order , logger first authorize next
//the middleware i.e logger will get applied only to those routes which has /api path in their route

app.get("/", logger, (req, res) => {
  const method = req.method; //method name : get, put,post ,delete
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //what if we need all the above three data in all of our routes. It's not feasible to write them all down in every route. so we create a function

  res.send("Home Page");
});

//even if we don't pass logger as middleware to our route, app.use handles it
//order matters , middleware function , app.use and then routes
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

//pass an extra middleware to "api/items"

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server listening : port 5000");
});

//various types of middleware
//1.create your own
//2.express middleware
