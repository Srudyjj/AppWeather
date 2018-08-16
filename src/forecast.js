import Weather from "./weather";

export default class Forecast extends Weather {
    constructor(city, country_code) {
        super(city, country_code);
        //'forecast' return 5 day / 3 hour forecast data
        this.type = 'forecast';
    }
}

