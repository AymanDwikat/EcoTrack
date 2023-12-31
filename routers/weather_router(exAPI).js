const express = require("express");
const router = express.Router();
const extractUserLocation = require("../controllers/extractlcation");
const WeatherController = require("../controllers/WeatherController");
router.get("/weather", extractUserLocation, WeatherController.getWeather);

module.exports = router;
