const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hi from tinder !");
});

app.listen(3000, () => {
  console.log("listening on the prot 3000....");
});
