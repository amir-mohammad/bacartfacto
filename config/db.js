const mongoose = require('mongoose');
const config = require('config');
const db = config.get("MongoURI")

const connectDB = () => {
    mongoose.connect(db,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    },() => {
        try {
            console.log("Mongo db is connected");
            return true;
        } catch (error) {
            console.log("mongo db is not connected");
            process.exit(1);
            return false;
        }
    })
}

module.exports = connectDB;