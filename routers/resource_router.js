const express = require("express");
const router = require("express").Router();

const resourcecontroller = require("../controllers/ResourceController");
const requireAuthentication = require("./Auth");

router.post("/resource", requireAuthentication, resourcecontroller.insert_resource);
router.get("/resource/allresources", requireAuthentication, resourcecontroller.get_resources);
router.delete("/resource/delete/:id", requireAuthentication, resourcecontroller.delete_resource);
router.put("/resource/update/:id", requireAuthentication, resourcecontroller.update_resource)
module.exports = router;