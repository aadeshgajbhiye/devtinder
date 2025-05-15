const express = require("express");

const app = express();

app.get("/users/:userID", (req, res) => {
  // /users/:userID - its a dynamic routes means though api route itself we can able to send the data
  // const { city } = req.query; this is the query we have send through the request with key and value pair
  //console.log(number);
  console.log(req.params);
  res.send({ name: "Adesh", password: 123 });
});

app.post("/users", (req, res) => {
  res.send("data received successfully");
});
app.use("/", (req, res) => {
  res.send("Base");
});

app.listen(3000, () => {
  console.log("listening on the prot 3000....");
});
