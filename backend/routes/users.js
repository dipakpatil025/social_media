const express = require('express');
var router = express.Router()

const { home, update, deleteUser, getUser, follow, unfollow } = require("../controllers/users")


// router.route("/").get(home);

// Update User
router.route("/:id").put(update);

// Dlete User
router.route("/:id").delete(deleteUser);

// Get A Users
router.route("/").get(getUser);

// Follow A user
router.route("/:id/follow").put(follow);

// Unfollow A User
router.route("/:id/unfollow").put(unfollow);


module.exports = router;