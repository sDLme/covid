import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleService } from '../core/services/console.service';
import { ApiService } from '../core/services/api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ConsoleService, ApiService ]
    };
  }

}
