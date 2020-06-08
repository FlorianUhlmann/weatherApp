import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
WeatherService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CityData ;

  location  ;
  weather: any;
  value:any;

  constructor(private weatherService:WeatherService ) { }

  ngOnInit(): void {

    this.value=localStorage.getItem('location')
    if(this.value!= null){
      this.location= JSON.parse(this.value)
    }else{
      this.location = 'Berlin';
    }

    this.weatherService.getWeather(this.location)
    .subscribe(res => (console.log(res) , this.CityData = res) )
  }

}
