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
      let temp = document.getElementById('temp');
      let wind = document.getElementById('wind');
      let humidity = document.getElementById('humidity');
      let uv = document.getElementById('uv');

      if (data.cod = data.message){
        cityDisplay.textContent = data.message
        temp.textContent = null
        wind.textContent = null
        humidity.textContent = null
        uv.textContent = null

        
      }else{
        cityDisplay.textContent = data.name
        temp.textContent = "Temp: " + data.main.temp + " °F"
        wind.textContent = "Wind Speed: " + data.wind.speed + " mph"
        humidity.textContent = "Humidity: " + data.main.humidity + " %"
        uv.textContent = data.weather.icon

      } 



      console.log(data)
      console.log(cityValue)
      
    })

  
}

searchBtn.addEventListener('click', getWeather)