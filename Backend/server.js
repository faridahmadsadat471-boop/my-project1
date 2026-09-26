const express = require("express");
const core = require("cors");
const mongoss = require("mongoose");
const mongoose = require("mongoose");
const { router } = require("./router/bookStorRouter");
const routerUser = require("./router/userRouter");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(core());

mongoose
  .connect("mongodb://localhost/bookstor")
  .then(() => {
    console.log("db connectes");
  })
  .catch((err) => console.log(err));

app.use("/api/v1/bookstore/", router);
app.use("/api/v1/user/", routerUser);

app.listen(3000, () => {
  console.log("the server is running ");
});
