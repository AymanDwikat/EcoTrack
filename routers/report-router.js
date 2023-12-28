const express = require("express");
const router = require("express").Router();

const reportcontroller = require("../controllers/ReportController");
const requireAuthentication = require("./Auth");

router.post("/report", requireAuthentication,reportcontroller.create_report);
router.get("/report/allreports", requireAuthentication,reportcontroller.get_reports);
router.delete("/report/deletereport/:id", requireAuthentication,reportcontroller.delete_report);
router.get("/report/getreport/:id",requireAuthentication, reportcontroller.get_report_byId);
router.put("/report/updatereport/:id", requireAuthentication,reportcontroller.update_report);

module.exports = router;
