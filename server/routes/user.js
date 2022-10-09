// const path = require('path');

const express = require("express");

const userController = require("../controllers/user.js");

const router = express.Router();

router.get("/users", userController.getUsers);

router.post("/", userController.postAddUser);

module.exports = router;
