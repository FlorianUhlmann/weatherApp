import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: 'home',  component: HomeComponent },
 { path: 'setting',  component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
