export default class UI {
  constructor() {
    this.time = document.getElementById('w-time');
    this.location = document.getElementById('w-location');
    this.lon = document.getElementById('w-lon');
    this.lat = document.getElementById('w-lat');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
    this.form = document.getElementById('w-form');
    this.changeBtn = document.getElementById('w-change-btn');
    this.container = document.getElementById('w-forecast');
  }

  paint(weather) {
    this.time.textContent = new Date(weather.dt*1000).toLocaleString();
    this.location.textContent = weather.name;
    this.lon.textContent = `lon: ${weather.coord.lon}`;
    this.lat.textContent = `lat: ${weather.coord.lat}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} ºC`;
    this.icon.setAttribute("src",`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.icon.setAttribute("alt",weather.weather[0].description);
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`; 
    this.sunrise.textContent = `Sunrise: ${new Date(weather.sys.sunrise*1000).toLocaleString().split(',')[1]}`;
    this.sunset.textContent = `Sunset: ${new Date(weather.sys.sunset*1000).toLocaleString().split(',')[1]}`;
  }

  paintForecast(forecast) {
    
    const listOfCart = `
      <div class="card my-1 text-center w-100" >
        <h4 class="card-header py-2">
            <span class="badge badge-pill badge-warning">${forecast.dt_txt.slice(0,-3)}</span>
        </h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item py-1 text-warning" >${forecast.main.temp} ºC</li>
          <li class="list-group-item py-1 text-info" >
            <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}" id="w-icon">
            ${forecast.weather[0].description}
          </li> 
          <li class="list-group-item py-1" >Humidity: ${forecast.main.humidity} %</li>
          <li class="list-group-item py-1" >Pressure: ${forecast.main.pressure} hPa</li>
          <li class="list-group-item py-1" >Wind: ${forecast.wind.speed} m/s</li>       
        </ul>
      </div>
    `;
    this.container.innerHTML += listOfCart;
  }

  deleteForecast() {
    this.container.innerHTML = "";
    document.getElementById("w-forecast-btn").removeAttribute("disabled");
  }

  static scrollTop() {
    const topBtn = document.getElementById("topBtn");
    
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    });

    topBtn.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
    });
  }
}




