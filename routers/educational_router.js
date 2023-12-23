const express = require("express");
const router = require("express").Router();

const educationalcontroller = require("../controllers/educationalcontroller");
router.post("/edudata", educationalcontroller.insertedudata);
router.get("/edudata", educationalcontroller.geteduacationaldata);
router.put("/edudata/:eduid", educationalcontroller.updateedudata);
router.delete("/edudata/:eduid",educationalcontroller.deleteedudata)
module.exports = router;