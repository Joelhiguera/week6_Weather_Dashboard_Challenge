const searchBtn = document.getElementById('search')
const recentSearchEl = document.getElementById('recent-search')
const newSearch = document.getElementById('newSearch')
const apiKey = '00b8f1f0d82b629d0fa8d63e80a96aff'
let cityValue = document.getElementById('city');



//current weather will only display weather not fetch

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
      // const { dt_txt } = data.weather[i]
      // cityDisplay.textContent = dt_txt

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

  function coordinateFun(city){
    // this will have the fetch with the endpoint with the geo 1.0
  }

  function searchBtn() {
    let city = cityValue;
    if ()
  }


// need to create a for loop to run through the weather for the next 5 days

// This is the original function. revert back when for loop does not work

// function fiveDayForcast() {
//   let cityValue = document.getElementById('city').value;
//   let city = cityValue;
//   const forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";

//   fetch(forcastUrl)
//     .then(function (response){
//       return response.json()
//     }).then(function (data){
//       // day 1
//       const forecastDate1 = document.getElementById('forecastDate1')
//       const imageDay1 = document.getElementById('imageDay1')
//       const tempDay1 = document.getElementById('tempDay1')
//       const windDay1 = document.getElementById('windDay1')
//       const humidityDay1 = document.getElementById('humidityDay1')
      

//       const { dt_txt } = data.list[i]
//       const { icon } = data.list[i].weather[i]
//       const { temp } = data.list[i].main
//       const { speed } = data.list[i].wind
//       const { humidity } = data.list[i].main

      
//       imageDay1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
//       forecastDate1.textContent = dt_txt
//       tempDay1.textContent = "Temp: " + temp + " °F"
//       windDay1.textContent = "Wind: " + speed + " mph"
//       humidityDay1.textContent = "Humidity: " + humidity + " %"

    
//       console.log(data)
//     })
// }




//How do i specify 5 days from the
function fiveDayForcast() {
  let cityValue = document.getElementById('city').value;
  let city = cityValue;
  const forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";


  //correct end point
  // `https://api.openweathermap.org
  // /data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`

  // var apiUrl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;



  // const forcastUrl = "https://api.openweathermap.org/data/3.0/onecall?q=" + city + "&exclude=hourly&appid=" + apiKey + "&units=imperial";

  // &cnt=5 limit search: add this before "&appid="

  fetch(forcastUrl)
    .then(function (response){
      return response.json()
    }).then(function (data){
     console.log(data)
     const forecastContainer = document.getElementById('forecastContainer')
      forecastContainer.innerHTML = ""

     for (var i = 0; i < data.list.length; i++) {
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



    //how do i get the button clicks to pull up the weather?
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

    function buttonHandle (e) {
       if (!e.target.matches('.recent')){
        return
       }
       const button = e.target
       const city = button.getAttribute('data-city')
       // coordinate function and pass in city 
       coordinateFun(city)
    }



document.getElementById('recent-search').addEventListener('click', buttonHandle)
searchBtn.addEventListener('click', currentWeather);
searchBtn.addEventListener('click', fiveDayForcast);
searchBtn.addEventListener('click', recentSearch);

