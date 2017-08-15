import { Component, OnInit, Output } from '@angular/core';
import { Currency } from '../currency.model';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currencies: Currency[] = [
    new Currency(3808, 'Litecoin (LTC)', '/coins/ltc/overview', 'Scrypt', 'PoW', 2),
    new Currency(38081, 'Litecoin (LTC)t', '/coins/ltc/overviewt', 'Scryptt', 'PoWt', 21)
  ];
  constructor() { }

  ngOnInit() {
  }

}
