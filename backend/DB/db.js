const mongoose = require('mongoose');
// require('dotenv').config();
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    })
    console.log("mongoDb connected.....");
}
module.exports = connectDB;