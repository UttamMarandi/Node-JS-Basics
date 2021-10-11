//MVC : Model
const express = require("express");
const app = express();
const people = require("./routes/people"); //route
const auth = require("./routes/auth"); //route

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//router use
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, (req, res) => {
  console.log("Server listening at port 5000");
});
