// controllers/weatherController.js
const WeatherModel = require('../models/weatherModel');

class WeatherController {
  static async getWeather(req, res) {
    const { location } = req.params;

    try {
      const weatherData = await WeatherModel.getWeather(location);
      res.json(weatherData);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = WeatherController;
