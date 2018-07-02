import { Injectable } from '@angular/core';
import { CityWeather } from './CityWeather';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as config from './config.json';

@Injectable()
export class CityWeatherService {
    private url = 'https://api.openweathermap.org/data/2.5/weather';

    constructor(private http: HttpClient) {
    }

    getCityWeather(cityId: string): Observable<CityWeather> {
        const params = new HttpParams()
        .set('id', cityId)
        .set('appid', config.default.openWeatherKey);
        return this.http.get<CityWeather>(this.url, {params});
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
