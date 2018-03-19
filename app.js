"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
	var cityName = searchCity.value;
	if (cityName.trim().length === 0) {
		return alert('Please enter a city name!')
	}
	var http = new XMLHttpRequest();
	var apiKey = '1e99098a64ad5ee3e606f4eefb9b4394';
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
	var method = 'GET';

	http.open(method, url);
	http.onreadystatechange = function() {
		if (http.readyState ===  XMLHttpRequest.DONE && http.status === 200) {
			var data = JSON.parse(http.responseText);
			var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
			weatherData.temperature = data.main.temp;
			console.log(weatherData);
		} else if (http.readyState ===  XMLHttpRequest.DONE ) {
			alert('There was an error');
		}
	};
	http.send();
}