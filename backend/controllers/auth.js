const User = require("../models/Users");
const bcrypt = require('bcrypt');
const { findOne } = require("../models/Users");
const jwtAuth = require("../middware/JWTAuth")


exports.home = (req, res) => {
    res.send("hello");
}



// Register
exports.register = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const result = await newUser.save();
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ sucess: false, error: error.message });
    }
}

// LOGIN
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        console.log(user.password);
        const validPass = await bcrypt.compare(req.body.password, user.password);
        console.log("here");
        !validPass && res.status(400).json("wrong password");

        res.status(200).json(user);
    } catch (error) {
        console.log("in catch");
        res.status(404).json({ sucess: false, error: error.message });
    }
}
