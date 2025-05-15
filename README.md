# devtinder

app.get("/users/:userID", (req, res) => {
// /users/:userID - its a dynamic routes means though api route itself we can able to send the data / Route parameters
// const { city } = req.query; this is the query we have send through the request with key and value pair / Qury Parameters
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

app.use(
"/users",
(req, res, next) => {
console.log("Hi from 1");
//res.send("First");
next();
},
(req, res, next) => {
console.log("Hi from second");
//res.send("Second");
next();
}
);

const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./Middleware/auth");

app.use("/admin", adminAuth);

app.use("/users", userAuth, (req, res) => {
res.send("all the users");
});

app.use("/admin/getAllUsers", (req, res) => {
res.send("get all the data");
});

app.use("/admin/deleteAllUsers", (req, res) => {
res.send("delete all the users");
});

app.listen(3000, () => {
console.log("listening on the prot 3000....");
});

mongodb+srv://adeshgajbhiye395:9THaEgYC4ZgFj1t1@cluster0.5rez4.mongodb.net/
