const express = require("express");
const router = require("express").Router();

const usercontroller = require("../controllers/UserController");
const requireAuthentication = require("./Auth");

router.post("/user", usercontroller.create_user);
router.get("/user/allusers",requireAuthentication, usercontroller.get_users);
router.delete("/user/deleteuser" , requireAuthentication,usercontroller.delete_user);
router.get("/user/getuser", requireAuthentication,usercontroller.get_user_byId);
router.put("/user/updateuser", requireAuthentication,usercontroller.update_user);
router.post("/user/login", usercontroller.login)
module.exports = router;
