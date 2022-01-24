const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require("helmet");
const connectDB = require("./DB/db");
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const cors = require('cors')
const multer = require('multer')
const path = require('path');
require('dotenv').config();
const port = process.env.PORT ||  5000;
app.use(cors())
// DB Connect
connectDB();

app.use("/images", express.static(path.join(__dirname, "public/images")))
// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/post");
    },
    filename: (req, file, cb) => {
        console.log(req.body.name);
        console.log(req.body);
        cb(null, file.originalname);
    }
})
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    // res.send("hehehe")
    // console.log(req.body.name);
    try {
        return res.status(200).json("file Uploaded successfully.")
    } catch (error) {
        console.log(error);
    }
})
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(port, () => {
    console.log(`server is running`);
})