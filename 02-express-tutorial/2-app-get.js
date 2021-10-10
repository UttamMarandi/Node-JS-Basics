const express = require("express");
const app = express(); //invoke the the function from express
// const app = require("express")()//invoke it right away

//Few express methods

//app.get //get the data
//app.post //insert the data
//app.delete //delete the data
//app.put //update the data
//app.all //for all methods i.e get,post,delete,put
//app.use //set the middleware
//app.listen

//app.get
//get the data from the server.
//1st parameter is the "path"/url where the data need to be served
//2nd is the callback function which runs each time user is performing a get request for the path

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});
app.all("*", (req, res) => {
  //writehead similar to status
  res.status(404).send("<h1>Page not found</h1>;");
});

//app.listen
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
