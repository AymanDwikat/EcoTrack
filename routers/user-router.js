const express = require("express");
const router = require("express").Router();

const usercontroller = require("../controllers/UserController");

router.get("/allusers", usercontroller.get_users);
router.post("/createuser", usercontroller.create_user);

module.exports = router;
