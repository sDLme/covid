import { Injectable } from '@angular/core';
import { Rider } from './rider.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private riderssList: Rider[] = [
    new Rider( 'Sergey', 'Honda 600', 'A',  '02:10:15'),
    new Rider( 'Vadim', 'Yamaha 1300', 'B',  '04:10:15'),
    new Rider( 'Alex', 'Kavasacy 1400', 'D',  '03:40:15'),
    new Rider( 'Pit', 'Suzuky 400', 'A',  '02:30:15'),
  ];


  constructor() { }

  getRiders () {
    return this.riderssList.slice();
  }
}
