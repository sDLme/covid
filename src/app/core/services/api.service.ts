import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export  class ApiService  {
  constructor(private httpService: HttpClient) {}
  loadData() {
   return this.httpService.get('https://api.coinpaprika.com/v1/exchanges');
  }

}
