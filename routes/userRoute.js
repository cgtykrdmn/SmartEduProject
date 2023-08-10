const express = require("express");
const userController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(userController.createUser); //http://localhost:3000/signup

module.exports = router;
