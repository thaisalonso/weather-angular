import { Component } from '@angular/core';
import { CityWeather } from './CityWeather';
import { CityWeatherService } from './app.service';
import { CityListService } from './services/city-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  cityWeather: CityWeather;
  city: string;
  results: string[];

    constructor(private cityWeatherService: CityWeatherService,
                private cityListService: CityListService) {}

    searchCityWeather(city) {
      this.cityWeatherService.getCityWeather(city.id)
      .subscribe(data => this.cityWeather = data);
    }

    getCityList(event) {
      this.results = this.cityListService.getCityList(event.query);
    }

    convertTemperature(temp) {
      return Math.round(temp - 273.15);
    }
}


