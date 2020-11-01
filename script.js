var cityInput = document.getElementById("city-input");
var weatherData = document.getElementById("current-weather-card");
var fivedayDisplay = document.querySelectorAll("#rowTwo .card.mb-5");
var searchBtn = document.getElementById("search-btn");

var get5Day = function (event) {
  event.preventDefault();
  var userCityInput = cityInput.value.trim();

  var openWeatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${userCityInput}&appid=04bc1d13e80b808a3f5983c30b92de70&units=imperial`;

  fetch(openWeatherURL)
    .then((response) => response.json())
    .then((weatherData) => {
      console.log("----> Weather data from fetch: \n", weatherData);

      //for loop to display weather on all Day cards
      for (i = 0; i < 5; i++) {
        //getting the temp from the API data array
        var tempEl = document.createElement("p");
        tempEl.textContent = "Temperature: " + weatherData.list[i].main.temp;

        //getting the humidity from the API data array
        var humidEl = document.createElement("p");
        humidEl.textContent =
          "Humidity: " + weatherData.list[i].main.humidity + "%";

        //getting the wind speed from the API data array
        var windspEl = document.createElement("p");
        windspEl.textContent =
          "Wind Speed: " + weatherData.list[i].wind.speed + "mph";

        //appending the created weather elements to the Daily Weather cards
        fivedayDisplay[i].appendChild(tempEl);
        fivedayDisplay[i].appendChild(humidEl);
        fivedayDisplay[i].appendChild(windspEl);
      }
    });
};

//loop through 5 day weather data to compile 5 day weather card
// for (var i = 0; i < 5; i++) {
//create element to display temperature
//   var tempEL = document.getElementById("mb-5 card").createElement("<p>");
//   tempEL.textContent = response.list[i].main.temp;

//   //   addClass("card-text").text("Temperature:" + response.list[i].main.temp);
//   //   var card = $("<div>").addClass("card bg-primary text-white");

//   //create element to display temperature
//   var humidEl = $("<p>");
//   $("card-text").text("Humidity:" + response.list[i].main.humidity);

//   var windEl = $("<p>");
//   $("card-text").text("Wind Speed:" + response.list[i].wind.speed);

//   card.append(tempEl, humidEl, windEL);

//keep doing this for all the parameters and then add to card.append(tempEL,humidEL.....)

//   });

searchBtn.addEventListener("click", get5Day);
