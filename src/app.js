import Storage from "./storage";
import Weather from "./weather";
import Forecast from "./forecast";
import UI from "./ui";

const storage = new Storage();
const weatherLocation = storage.getLocationData();  
const weather = new Weather(weatherLocation.city, weatherLocation.country_code);
const forecast = new Forecast(weatherLocation.city, weatherLocation.country_code);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById('city').value;
  const country_code = document.getElementById('country_code').value;
  ui.deleteForecast();
  weather.changeLocation(city, country_code);
  forecast.changeLocation(city, country_code);
  getWeather();
  storage.setLocationData(city, country_code);
  $('#locModal').modal('hide');
});

document.getElementById("w-forecast-btn").addEventListener("click", function(e) {
  getForecast(); 
  this.setAttribute('disabled','disabled');   
});

UI.scrollTop();


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(() => { 
      alert("Something went wrong!!! Check the data or internet connection");
    });
};

function getForecast() {
  forecast.getWeather()
    .then(result => {
      result.list.forEach(row => {
        ui.paintForecast(row);
        $('#w-forecast').collapse();
      });
    })
    .catch(() => { 
      alert("Something went wrong!!! Check the data or internet connection");
    });
}

