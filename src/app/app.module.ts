import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyComponent } from './currency/currency.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
