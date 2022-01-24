const express = require('express');
var router = express.Router()

const { home, update, deleteUser, getUser, follow, unfollow, getfollowers, dipak, getAllDetials } = require("../controllers/users")



// Update User
router.route("/:id").put(update);

// Dlete User
router.route("/:id").delete(deleteUser);

// Get A Users
router.route("/").get(getUser);

// Get User Detials
router.route("/getalldetials/:id").get(getAllDetials)


// Follow A user
router.route("/:id/follow").put(follow);

// Unfollow A User
router.route("/:id/unfollow").put(unfollow);

// get user followes
// router.route("/diapk").get(getfollowers)

router.route("/diapk/userId").get(dipak)
router.route("/followrs/:userId").get(getfollowers);



module.exports = router;