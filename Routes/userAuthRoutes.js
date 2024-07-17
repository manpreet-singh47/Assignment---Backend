const express = require("express");
const { Login, Logout, Signup } = require("../Controllers/userAuthControllers");
const router = express.Router();

router.post("/login", Login);
router.post("/logout", Logout);
router.post("/signup", Signup);
module.exports = router;
