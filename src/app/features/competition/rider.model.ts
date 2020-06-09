import { Data } from '@angular/router';

export class Rider {
    public name: string;
    public moto: string;
    public category: string;
    public time: string;
  
    constructor(name: string, moto: string, category: string, time: string) {
      this.name = name;
      this.moto = moto;
      this.category = category;
      this.time = time;
    }
  }