const express = require("express");
const router = require("express").Router();

const DataCollectionController = require("../controllers/DataCollectionController");
const requireAuthentication = require("./Auth");

router.post("/data", requireAuthentication, DataCollectionController.insertdata); //insert new data
router.put("/data/update/:dataId", requireAuthentication,DataCollectionController.updatedata); //update data by data id
router.delete("/data/delete/:dataId",requireAuthentication, DataCollectionController.deletedata); //delete data by dataid
router.get("/data/getdata/:userId",requireAuthentication, DataCollectionController.getData); // get all data someuser inserted
module.exports = router;
