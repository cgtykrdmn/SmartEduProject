const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.createUser); //http://localhost:3000/signup
router.route("/login").post(authController.loginUser);
router.route("/logout").get(authController.logoutUser);

module.exports = router;
