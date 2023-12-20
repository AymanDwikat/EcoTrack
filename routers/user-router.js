const express = require("express");
const router = require("express").Router();

const usercontroller = require("../controllers/UserController");

router.post("/user", usercontroller.create_user);
router.get("/user/allusers", usercontroller.get_users);
router.delete("/user/deleteuser/:id", usercontroller.delete_user);
router.get("/user/getuser/:id", usercontroller.get_user_byId);
router.put("/user/updateuser/:id", usercontroller.update_user);

module.exports = router;
