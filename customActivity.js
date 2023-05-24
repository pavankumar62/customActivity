function getWeather() {
    var city = document.getElementById("city").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=11fa607635d5103f9f324c0b5d6cfdf2";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var weatherData = document.getElementById("weather-data");
            weatherData.innerHTML = "";
            var cityName = document.createElement("h2");
            cityName.innerText = data.name + ", " + data.sys.country;
            weatherData.appendChild(cityName);
            var weather = document.createElement("p");
            weather.innerText = data.weather[0].description;
            weatherData.appendChild(weather);
            var temp = document.createElement("p");
            temp.innerText = "Temperature: " + (data.main.temp - 273.15).toFixed(1) + "°C";
            weatherData.appendChild(temp);
        })
        .catch(error => console.error(error));
}
