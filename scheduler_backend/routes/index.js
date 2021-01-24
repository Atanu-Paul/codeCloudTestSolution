//importing the required packages
const express = require("express");

//setting up express router
const router = express.Router();

//importing the constructor method
const { sayHi, register, getAllData } = require("../controller");

//get routes
router.get("/", sayHi);
router.get("/allData", getAllData);

//post routes
router.post("/register", register);

//exporting the routing module
module.exports = router;
