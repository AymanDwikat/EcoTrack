const express = require("express");
const router = require("express").Router();

const opendatacontroller = require("../controllers/opendatacontroller");

router.get("/opendata", opendatacontroller.getdata) // get all data someuser inserted
module.exports = router;

