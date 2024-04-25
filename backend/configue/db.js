const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Mongodb Database ${con.connection.host}`);
  } catch (error) {
    console.log(`error in MongoDb ${error}`);
  }
};

module.exports = connectDB;
