//Express Basics
const express = require("express");
const path = require("path");
const app = express();

//express.static() mentions the folder where all the resource file are present. This allows automatic import of utility file like styles.css, without us doing extra work

//app.use is for setting up the middleware
//static means it is a file that server does not need to change it
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.status(200);
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//   //index.html is also a static file , so it can be dumped in express.static
//   //so using only app.use(express.static("./public")) with index.html inside public folder will do the work for static files
//   //we don't need to do app.get
// });
//also can use path.join

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
