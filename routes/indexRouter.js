const express = require('express'); 
const router =express.Router(); 

const getWeather = require('../lib/getWeather');

router.get('/', async(req, res) => {
  let data = await getWeather("Manchester", "uk");
  let name = data.name;
  let temp = data.main.temp;
  let tempFeel = data.main.feels_like;
  let description = data.weather[0].description;
  let sunrise = data.sys.sunrise;
  let sunset = data.sys.sunrise;

  res.render('index', {
    name, 
    data: {temp, tempFeel, sunrise, sunset, description}
  });
});

module.exports = router;