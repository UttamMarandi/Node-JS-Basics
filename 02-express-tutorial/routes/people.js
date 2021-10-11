const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// //get
// router.get("/", getPeople);

// //post for javascript login
// router.post("/", createPerson);

// //postman post test
// router.post("/postman", createPersonPostman);

// //app.put()
// router.put("/:id", updatePerson);

// //app.delete
// router.delete("/:id", deletePerson);

//chain routes
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
