const express = require("express");
const router = express.Router();
let { people } = require("../data");

//post for javascript login
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    //if user submit no name
    res.status(400).json({ sucess: false, msg: "please provide name value" });
  } else {
    res.status(201).send({ sucess: true, person: name }); //201 means sucessfully created
  }
});

//postman post test
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    //if user submit no name
    res.status(400).json({ sucess: false, msg: "please provide name value" });
  } else {
    res.status(201).send({ sucess: true, data: [...people, name] }); //201 means sucessfully created
    //append name to people array
  }
});

//app.put()
router.put("/:id", (req, res) => {
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

//app.delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  //find the person with the id
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(404).json({ sucess: false, msg: "data not found" });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  //if person id is not same with id provided, then include in newPeople
  return res.status(200).json({ sucess: true, data: newPeople });
});

module.exports = router;
