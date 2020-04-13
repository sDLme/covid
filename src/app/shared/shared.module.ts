import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsoleService} from '../core/services/console.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class SharedModule {

  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: ConsoleService
    };

}
}
