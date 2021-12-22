const express = require('express');
var router = express.Router()

const { home, register, login } = require("../controllers/auth")


router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;