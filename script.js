var cityInput = document.getElementById("city-input");
var weatherData = document.getElementById("current-weather-card");
var fivedayDisplay = document.getElementsByClassName("mb-5 card");
var searchBtn = document.getElementById("search-btn");

var get5Day = function (event) {
  event.preventDefault();
  var userCityInput = cityInput.value.trim();

  var openWeatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${userCityInput}&appid=04bc1d13e80b808a3f5983c30b92de70&units=imperial`;

  fetch(openWeatherURL)
    .then((response) => response.json())
    .then((data) => console.log(data));

  var tempEl = fivedayDisplay.createElement("<p>");
  tempEl.textContent = response.list[0].main.temp;
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
};

searchBtn.addEventListener("click", get5Day);
