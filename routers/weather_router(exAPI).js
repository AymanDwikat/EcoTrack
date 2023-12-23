const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weatherController');

router.get('/weather/:location', WeatherController.getWeather);

module.exports = router;
