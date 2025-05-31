const express = require("express");
const{createUser, loginUser, getUser, updateUser, deleteUser} = require("../Controller/usercontroller");
const route = express.Router();

route.post("/", createUser)
route.post("/login", loginUser)
route.get("/", getUser)
route.put("/", updateUser)
route.delete("/", deleteUser)

module.exports = route