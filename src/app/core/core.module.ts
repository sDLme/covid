import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreLayoutComponent } from './core-layout.component';

// services
import { ConsoleService } from './services/console.service';
import { ApiService } from './services/api.service';

// material
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, CoreLayoutComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    CoreLayoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
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
