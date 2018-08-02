
class Forecast extends Weather {
    constructor(city, country_code) {
        super(city, country_code);
        //'forecast' return 5 day / 3 hour forecast data
        this.type = 'forecast';
    }
}

// forecast = new Forecast("Kharkiv", "ua");

// console.log(forecast.getWeather());
