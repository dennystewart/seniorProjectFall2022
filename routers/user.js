
const router = require("express").Router();

//const bodyParser = require("body-parser");

//app.use(bodyParser.urlencoded({ extended: true }));



//import controllers
const { createUser } = require("../controllers/user");
const { validateUser, validate } = require("../middlewares/validator");

//api routes
router.post("/signup", validateUser, validate, createUser);

module.exports = router;








//app.post("/submit", (req, res) => {
    // TODO: Handle the form submission in the controller
  //});
  
