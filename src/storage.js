export default class Storage {
  constructor() {
    this.city;
    this.country_code;
    this.defaultCity = "Kharkiv";
    this.defaultCountryCode = "UA";
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    };

    if(localStorage.getItem('country_code') === null) {
      this.country_code = this.defaultCountryCode;
    } else {
      this.country_code = localStorage.getItem('country_code');
    };
    return {
      city: this.city,
      country_code: this.country_code
    }
  }

  setLocationData(city, country_code) {
    localStorage.setItem('city', city);
    localStorage.setItem('country_code', country_code)

  }
}