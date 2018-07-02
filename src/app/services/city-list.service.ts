import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as cities from '../city.list.json';

@Injectable({
  providedIn: 'root'
})
export class CityListService {

  constructor(private http: HttpClient) { }

  getCityList(query: string) {
    return cities.default
        .filter(city => city.name.toUpperCase().includes(query.toUpperCase()));
  }
}
