import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleService } from '../core/services/console.service';
import { AppModule } from '../app.module';



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
      providers: [ ConsoleService, AppModule ]
    };
  }

}
