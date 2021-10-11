//Middleware
//Each middleware function has access to both req and res object

//middleware sits in between request and response
//req =>middleware =>response

const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const method = req.method; //method name : get, put,post ,delete
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("Testing"); //important step, terminate
  next(); //pass to next middleware
};
//we pass the middleware as the second paramter between the route and the callback function
//express automatically pass the req,res and next parameter to middleware
//it's important for us to send data to the client through the middleware using res.send() or res.json() for it to work on the browser
//if we are not sending data to client then we have to pass the middleware to next middleware using next

app.get("/", logger, (req, res) => {
  const method = req.method; //method name : get, put,post ,delete
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //what if we need all the above three data in all of our routes. It's not feasible to write them all down in every route. so we create a function

  res.send("Home Page");
});

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server listening : port 5000");
});
