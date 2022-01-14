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
require('dotenv').config();

app.use(cors())
// DB Connect
connectDB();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(5000, () => {
    console.log(`server is running`);
})