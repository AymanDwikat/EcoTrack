const express = require("express");
const router = require("express").Router();

const reportcontroller = require("../controllers/ReportController");

router.post("/report", reportcontroller.create_report);
router.get("/report/allreports", reportcontroller.get_reports);
router.delete("/report/deletereport/:id", reportcontroller.delete_report);
router.get("/report/getreport/:id", reportcontroller.get_report_byId);
router.put("/report/updatereport/:id", reportcontroller.update_report);

module.exports = router;
