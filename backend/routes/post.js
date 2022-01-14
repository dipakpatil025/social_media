const express = require('express');
var router = express.Router();
const { home, update, deletePost, like, get, timeline,profile } = require("../controllers/post");

router.route("/timeline/:userid").get(timeline);
router.route("/profile/:username").get(profile);
router.route("/").post(home);
router.route("/:id").put(update);
router.route("/:id").delete(deletePost);
router.route("/:id/like").put(like);
router.route("/:id").get(get);

module.exports = router;