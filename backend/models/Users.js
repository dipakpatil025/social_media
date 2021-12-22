const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6,
        select: false

    },
    profilePicture: {
        type: String,
        default: ""
    },
    CoverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },
    dec: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3],
    }
},
    { timestamps: true, select: false }
);

// Svae/create and hash password 
UserSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        console.log("he he eh eehe eh ee ehe e ee ehe re ");
        next();
    }
    const salt = await bcrypt.genSalt(10);
    const result = await bcrypt.hash(this.password, salt);
    this.password = result;
    console.log(this.password);
    next();

});
module.exports = mongoose.model("User", UserSchema);    