// models/weatherModel.js
const axios = require('axios');

class WeatherModel {
  static async getWeather(location) {
    try {
      const apiKey = 'a335e19bc7b433f0d469d39010ffa579';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = WeatherModel;
