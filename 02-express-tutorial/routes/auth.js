const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please provide credentials");
  }
});

module.exports = router;
