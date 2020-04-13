import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  dataObj: any;
  constructor(private httpService: ApiService) { }
  ngOnInit() {
     this.httpService
      .loadData()
      .subscribe( response => {
          this.dataObj = response;
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        });
  }
}
