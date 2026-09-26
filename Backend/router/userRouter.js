const express = require("express");
const routerUser = express.Router();

const {
  createUser,
  getAlluser,
  deleteUser,
  getOneuser,
  updateUser,
} = require("../controller/userControlerl");

routerUser.post("/create", createUser);
routerUser.get("/", getAlluser);
routerUser.get("/:id", getOneuser);
routerUser.patch("/:id", updateUser);
routerUser.delete("/:id", deleteUser);

module.exports = routerUser;
