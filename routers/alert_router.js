const express = require("express");
const router = require("express").Router();

const alertcontroller = require("../controllers/AlertController");
const requireAuthentication = require("./Auth");

router.post("/alert", requireAuthentication, alertcontroller.create_alert);
router.delete("/alert/delete/:id", requireAuthentication,alertcontroller.delete_alert);
router.put("/alert/update/:id", requireAuthentication,alertcontroller.update_alert);
router.get("/alert/getalert/:id",requireAuthentication, alertcontroller.get_alert_byId);
// router.put("/alert/:id", requireAuthentication,reportcontroller.);
// router.put("/alert/:id", requireAuthentication,reportcontroller.);

module.exports = router;
