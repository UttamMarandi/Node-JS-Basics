//HTTP METHODS IN EXPRESS

const express = require("express");
let { people } = require("./data");
const app = express();
//app.use() //applies the middleware
app.use(express.static("./methods-public"));

//middleware to parse form data : we need this to work with form data
app.use(express.urlencoded({ extended: false }));

//middleware to parse json
app.use(express.json()); //now we have access to json data that is received from form

//app.get()
app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people });
});
//app.post()
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please provide credentials");
  }
});
//postman post test
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    //if user submit no name
    res.status(400).json({ sucess: false, msg: "please provide name value" });
  } else {
    res.status(201).send({ sucess: true, data: [...people, name] }); //201 means sucessfully created
    //append name to people array
  }
});

//post for javascript login
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    //if user submit no name
    res.status(400).json({ sucess: false, msg: "please provide name value" });
  } else {
    res.status(201).send({ sucess: true, person: name }); //201 means sucessfully created
  }
});

//app.put()
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params; //get the param id
  const { name } = req.body; //get the name submitted by us as raw data in postman
  console.log(id, name);

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(404).json({ sucess: false, msj: `no person with id ${id}` });
  }
  //change the name for the person id provided
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ sucess: true, data: newPeople });
});

app.listen(5000, (req, res) => {
  console.log("Server listening at port 5000");
});

//url encoded
// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.

// Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.

// urlencoded
// This option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.
