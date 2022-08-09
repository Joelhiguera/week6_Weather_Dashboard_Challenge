const searchBtn = document.getElementById('search')
const recentSearch = document.getElementById('recent-search')
const newSearch = document.getElementById('newSearch')
const apiKey = '00b8f1f0d82b629d0fa8d63e80a96aff'





function currentWeather() {
  let cityValue = document.getElementById('city').value;
  let city = cityValue;
  const requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
  

  fetch(requestUrl)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      const cityDisplay = document.getElementById('cityDisplay')
      let tempEl = document.getElementById('temp');
      let windEl = document.getElementById('wind');
      let humidityEl = document.getElementById('humidity');
      let uvEl = document.getElementById('uv');
      let countryEl = document.getElementById('country')
      let date = document.getElementById('date')
      const { name } = data;
      const { country } = data.sys;
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { dt_txt } = data.weather[0]
      cityDisplay.textContent = dt_txt

      if (data.cod = data.message){
        // cityDisplay.textContent = data.message
        cityDisplay.textContent = name
        tempEl.textContent = null
        windEl.textContent = null
        humidityEl.textContent = null
        uvEl.textContent = null

        
      }else{
        // cityDisplay.textContent = data.name
        cityDisplay.textContent = name + ", " + country
        tempEl.textContent = "Temp: " + temp + " °F"
        windEl.textContent = "Wind Speed: " + speed + " mph"
        humidityEl.textContent = "Humidity: " + humidity + " %"
        
      } 



      console.log(data)
      
      
    })

  
}

function fiveDayForcast() {
  let cityValue = document.getElementById('city').value;
  let city = cityValue;
  const forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";

  fetch(forcastUrl)
    .then(function (response){
      return response.json()
    }).then(function (data){
      // day 1
      const forecastDate1 = document.getElementById('forecastDate1')
      const imageDay1 = document.getElementById('imageDay1')
      const tempDay1 = document.getElementById('tempDay1')
      const windDay1 = document.getElementById('windDay1')
      const humidityDay1 = document.getElementById('humidityDay1')
      

      const { dt_txt } = data.list[0]
      const { icon } = data.list[0].weather[0]
      const { temp } = data.list[0].main
      const { speed } = data.list[0].wind
      const { humidity } = data.list[0].main

      
      imageDay1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      forecastDate1.textContent = dt_txt
      tempDay1.textContent = "Temp: " + temp + " °F"
      windDay1.textContent = "Wind: " + speed + " mph"
      humidityDay1.textContent = "Humidity: " + humidity + " %"

    
      console.log(data)
    })
}

searchBtn.addEventListener('click', currentWeather)
searchBtn.addEventListener('click', fiveDayForcast)

