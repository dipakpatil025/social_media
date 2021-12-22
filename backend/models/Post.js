const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    dec: {
        type: String,
        max: 500,
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    }
},
    { timestamps: true, select: false }
);


module.exports = mongoose.model("Post", PostSchema);    