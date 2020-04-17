import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { ConsoleService } from './services/console.service';
import { ApiService } from './services/api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ ConsoleService, ApiService ]
    };
  }
}
