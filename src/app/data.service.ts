import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getCoinList() {
    console.log('get coins');
    const result = [];
    this.http.get('https://www.cryptocompare.com/api/data/coinlist/')
      .subscribe(
        (res) => {
          console.log('coins', res);
          for (const symbol in res['Data']) {
            if (res['Data'][symbol] !== undefined ) {
              result.push(res['Data'][symbol]);
            }
          }
        });
    return result;
  }

  getCoinSnapShot(id: number) {
    console.log('get coin');
    return this.http.get(`https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${id}`)
      .subscribe(
        (res) => {
          console.log(res['data']);
        }
      );
  }
}
