import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '632743f8cc683106459af4eae9eb58b9';
  url;
  constructor(private http: HttpClient) {this.url = 'http://api.openweathermap.org/data/2.5/forecast?q='; }

  getWeather(city){
    return this.http.get(this.url+city+'+&appid='+this.apiKey).pipe( map ((res: Response) => res)) ;
  }
}
