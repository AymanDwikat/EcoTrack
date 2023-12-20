const express = require("express");
const router = require("express").Router();

const scorecontroller = require("../controllers/ScoreController");

router.post("/score", scorecontroller.create_score);
router.get("/score/allscores", scorecontroller.get_scores);
router.delete("/score/deletescore/:id", scorecontroller.delete_score);
router.get("/score/getscore/:id", scorecontroller.get_score_byId);
router.put("/score/updatescore/:id", scorecontroller.update_score);

module.exports = router;
