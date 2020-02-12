const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

//signup
router.post("/", userController.signUp);

//authenticate
router.post("/auth", userController.authenticate);

//delete user
router.delete("/:uid", userController.deleteUser);

module.exports = router;
