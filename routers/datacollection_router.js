const express = require("express");
const router = require("express").Router();

const DataCollectionController = require("../controllers/DataCollectionController");

router.post("/data", DataCollectionController.insertdata);//insert new data
router.put("/data/:dataId", DataCollectionController.updatedata);//update data by data id
router.delete("/data/:dataId", DataCollectionController.deletedata);//delete data by dataid
router.get("/data/:userId",DataCollectionController.getData) // get all data someuser inserted
module.exports = router;

