const express = require("express");
const router = require("express").Router();

const scorecontroller = require("../controllers/ScoreController");
const requireAuthentication = require("./Auth");

router.get("/score/allscores", requireAuthentication,scorecontroller.get_scores);
router.delete("/score/deletescore", requireAuthentication,scorecontroller.delete_score);
router.get("/score/getscore", requireAuthentication,scorecontroller.get_score_byId);
router.put("/score/updatescore",requireAuthentication, scorecontroller.update_score);

module.exports = router;
