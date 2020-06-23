import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

// service
import { ApiService } from './api.service';


@Injectable({ providedIn: 'root' })
export class APIResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {}

  resolve() {
    return this.apiService.loadData();
  }
}