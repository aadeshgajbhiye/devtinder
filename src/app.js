const express = require("express");

const app = express();

const connectDB = require("./config/database");
const User = require("./Models/user");

app.post("/signup", async (req, res) => {
  // created a new instance of a user basically object
  const user = new User({
    firstName: "Akshay",
    lastName: "Saini",
    emailId: "akshaySaini@gmail.com",
    password: "1234",
  });
  await user.save();
  res.send("Data saved Successfully");
});

connectDB()
  .then(() => {
    console.log("database connection is established");
    app.listen(3000, () => {
      console.log("listening on the prot 3000....");
    });
  })
  .catch(() => {
    console.log("db is not connected");
  });
