const storage = new Storage();
const weatherLocation = storage. getLocationData();  
const weather = new Weather(weatherLocation.city, weatherLocation.country_code);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById('city').value;
  const country_code = document.getElementById('country_code').value;

  weather.changeLocation(city, country_code);

  getWeather();

  storage.setLocationData(city, country_code);

  $('#locModal').modal('hide');
  
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(() => { 
      alert("Something went wrong!!! Check the data or internet connection");
    });
}

