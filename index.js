const searchBtn = document.getElementById('search')
const newSearch = document.getElementById('newSearch')
const apiKey = '00b8f1f0d82b629d0fa8d63e80a96aff'


// Handles current weather display and fetch request 
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

      if (data.cod == 404){
        cityDisplay.textContent = "City Not Found"
        tempEl.textContent = null
        windEl.textContent = null
        humidityEl.textContent = null
        uvEl.textContent = null
        countryEl.textContent = null
        console.log('city not found')
        
      }else{
        cityDisplay.textContent = name + ", " + country
        tempEl.textContent = "Temp: " + temp + " °F"
        windEl.textContent = "Wind Speed: " + speed + " mph"
        humidityEl.textContent = "Humidity: " + humidity + " %"
        
      } 
      console.log(data)
      console.log(data.message)
      
      
    })

}

function fiveDayForcast() {
  let cityValue = document.getElementById('city').value;
  let city = cityValue;
  const forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=5&appid=" + apiKey + "&units=imperial";
  fetch(forcastUrl)
  .then(function (response){
    return response.json()
  }).then(function (data){
    console.log(data)
    for (var i = 0; i < data.list.length; i++) {
     const forecastContainer = document.getElementById('forecastContainer')
     const daysDiv = document.createElement('div')
     const forecastDate = document.createElement('h3')
     const forecastTemp = document.createElement('p')
     const forecastImg = document.createElement('img')
     const forecastWind = document.createElement('p')
     const forecastHumidity = document.createElement('p')
     daysDiv.classList.add('days')

     const { dt_txt } = data.list[i]
     const { icon } = data.list[i].weather[0]
     const { temp } = data.list[i].main
     const { speed } = data.list[i].wind
     const { humidity } = data.list[i].main

     forecastDate.textContent = dt_txt
     forecastTemp.textContent = "Temp: " + temp + " °F"
     forecastWind.textContent = "Wind: " + speed + " mph"
     forecastHumidity.textContent = "Humidity: " + humidity + " %"
     forecastImg.setAttribute('src', "https://openweathermap.org/img/wn/" + icon + "@2x.png")



      
   
      
    forecastContainer.appendChild(daysDiv);
    daysDiv.appendChild(forecastDate);
    daysDiv.appendChild(forecastImg);
    daysDiv.appendChild(forecastTemp);
    daysDiv.appendChild(forecastWind);
    daysDiv.appendChild(forecastHumidity);

    

    

    






    }
  })
}

function recentSearch() {


  const cityValue = document.getElementById('city').value;
  const city = cityValue;
  const recentContainer = document.getElementById('recent-search')
  const recentLi = document.createElement('li')
  const recentBtn = document.createElement('button')

  recentBtn.classList.add('recent')
  recentBtn.type = "submit";
  recentBtn.innerHTML = city;
  recentBtn.setAttribute('data-city', city)

  
  
  recentContainer.appendChild(recentLi)
  recentLi.appendChild(recentBtn)


  

}



//calling all functions
searchBtn.addEventListener('click', currentWeather);
searchBtn.addEventListener('click', fiveDayForcast);
searchBtn.addEventListener('click', recentSearch);



