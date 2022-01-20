const Post = require("../models/Post");
const User = require("../models/Users");
const { post } = require("../routes/post");

// Create Post
exports.home = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

}

// update
exports.update = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId == req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json(post);
        }
        else {
            res.status(403).json({ message: "You are not aouthorized" });
        }

    } catch (error) {

        res.status(500).json({ success: false, message: error.message })
    }
    // res.send("ok");
}

// delete

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId == req.body.userId) {
            await post.deleteOne();
            res.status(200).json({ message: "Post delete succesfully" });
        }
        else {
            res.status(403).json({ message: "You are not aouthorized" });
        }

    } catch (error) {

        res.status(500).json({ success: false, message: error.message })
    }
    // res.send("ok");
}

//  ke
exports.like = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json({ message: "post has been liked" });
        }
        else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json({ message: "post has been disliked" });
        }

    } catch (error) {

        res.status(500).json({ success: false, message: error.message })
    }
}

// get a post

exports.get = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
    // res.send("ok");
};


// get all post of users following ot timeline post
exports.timeline = async (req, res) => {
    try {

        const currentUser = await User.findById(req.params.userid);
        const userPost = await Post.find({ userId: currentUser._id });
        const friendsPost = await Promise.all(
            currentUser.followings.map(friendId => {

                return Post.find({ userId: friendId });
            })
        )
        const friendsPostfollowers = await Promise.all(
            currentUser.followers.map(friendId => {

                return Post.find({ userId: friendId });
            })
        )
        // console.log("->", friendId)

        res.status(200).json(userPost.concat(...friendsPost).concat(...friendsPostfollowers));
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
    // res.send("ok");
};

exports.profile = async (req, res) => {
    try {

        console.log(req.params);
        const user = await User.findOne({ username: req.params.username })
        const post = await Post.find({ userId: user._id });
        console.log(post);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
    // res.send("ok");
};
