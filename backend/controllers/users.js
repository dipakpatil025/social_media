const User = require("../models/Users");
const bcrypt = require('bcrypt');
const router = require("../routes/users");



exports.home = (req, res) => {
    res.send("hello babu");
}


// Update User
exports.update = async (req, res) => {

    // console.log(req.user);
    
    
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json({ success: true, message: "User updae succesfully" })
        } catch (error) {

            res.status(403).json({ success: false, message: error });
        }
    }
    else {
        res.status(403).json({ success: false, message: "You can update your account only !" });
    }

}


// Dlete User
exports.deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            console.log(req.params.id);
            const user = await User.findByIdAndDelete(req.params.id);

            res.status(200).json({ success: true, message: "User Deleted succesfully" })
        } catch (error) {

            res.status(403).json({ success: false, message: error });
        }
    }
    else {
        res.status(403).json({ success: false, message: "You can update your account only !" });
    }

}

// Get A Users
// Localhost:3000/user?userId=1234
// Localhost:3000/user?username=test
exports.getUser = async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        console.log("heeeeeeeeheeeeeeee");
        
        const user = (userId)
            ? await User.findOne({ userId: userId })
            : await User.findOne({ username: username });
        
            res.status(200).json(user)
    } catch (error) {

        res.status(403).json({ success: false, message: error.message });
    }
}


// Follow A user
exports.follow = async (req, res) => {
    if (req.params.id !== req.body.userId) {
        try {

            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })

                res.status(200).json({ message: "User has been  follwed" });
            }
            else {
                res.status(403).json({ message: "you already follow that persion" });
            }
            // res.send("ok");
        } catch (error) {
            res.status(403).json({ success: false, message: error.message });
        }
    }
    else {
        res.status(403).json({ success: false, message: "You cant follow your self" });
    }
}
// Unfollow A User

exports.unfollow = async (req, res) => {
    if (req.params.id !== req.body.userId) {
        try {

            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })

                res.status(200).json({ message: "User has been unfollwed" });
            }
            else {
                res.status(403).json({ message: "you Dont follow this user" });
            }
            // res.send("ok");
        } catch (error) {
            res.status(403).json({ success: false, message: error.message });
        }
    }
    else {
        res.status(403).json({ success: false, message: "You cant follow your self" });
    }
}