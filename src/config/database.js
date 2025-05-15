const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://adeshgajbhiye395:9THaEgYC4ZgFj1t1@cluster0.5rez4.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
