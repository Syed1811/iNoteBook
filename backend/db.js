const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/inotebook");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
