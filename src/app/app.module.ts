import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityWeatherService } from './app.service';
import { CityListService } from './services/city-list.service';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule
  ],
  providers: [ CityWeatherService, CityListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
