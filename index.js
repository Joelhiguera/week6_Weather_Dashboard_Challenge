const searchBtn = document.getElementById('search')
const recentSearch = document.getElementById('recent-search')
const newSearch = document.getElementById('newSearch')
const apiKey = '00b8f1f0d82b629d0fa8d63e80a96aff'



function getWeather() {
  // const requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={00b8f1f0d82b629d0fa8d63e80a96aff}"

  //example
  // const requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=00b8f1f0d82b629d0fa8d63e80a96aff&units=imperial";
  let cityValue = document.getElementById('city').value;
  let city = cityValue;

  const requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

  fetch(requestUrl)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      const cityDisplay = document.getElementById('cityDisplay')
      // const humidity = document.getElementById('humidity')
      // const wind = document.getElementById('wind')
      // const temp = document.getElementById('temp')
      // temp.textContent = data.current.temp
      // wind.textContent = data.current.wind_speed
      // humidity.textContent = data.current.humidity
      cityDisplay.textContent = city;
      console.log(data)
      console.log(cityValue)
      
    })

  
}

searchBtn.addEventListener('click', getWeather)