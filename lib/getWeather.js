const fetch = require('node-fetch');
require('dotenv').config();

// console.log(url)

const getWeather = async(location, countryCode) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&units=metric&appid=${process.env.APPID}`;
  let data = await fetch(url);
  return await data.json();
}

module.exports = getWeather;