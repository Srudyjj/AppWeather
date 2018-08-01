class Weather {
  
  constructor(city, country_code = 'ua', type='weather', units='metric', lang='') {
    //type='forecast/weather'
    //'weather' return current weather
    //'forecast' return 5 day / 3 hour forecast data
    const apiKey = "0c912f3c474673f1887c53697b408890";
    this.city = city;
    this.country_code = country_code;
    this.lang = lang;
    this.units = units;
    this.type = type;  
    this._apiKey = apiKey;
  }

  async getWeather() {
    const responce = await fetch(`https://api.openweathermap.org/data/2.5/${this.type}?q=${this.city},${this.country_code}&units=${this.units}&lang=${this.lang}&APPID=${this._apiKey}`)
    .catch(err => console.log(err));
    const responceData = await responce.json()
    return responceData
  }

  changeLocation(city, country_code) {
    this.city = city;
    this.country_code = country_code;
  }
}

