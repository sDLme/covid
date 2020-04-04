import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  dataObj: any;
  constructor(private httpService: HttpClient) { }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.httpService.get('https://api.coinpaprika.com/v1/exchanges').subscribe(
      response => {
        this.dataObj = response;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      });
  }

}
