import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city : string;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  save(){
    let city=this.city;

    localStorage.setItem('location', JSON.stringify(city))
    this.route.navigate(['home']);
  }
}
