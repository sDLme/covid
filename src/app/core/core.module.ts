import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreLayoutComponent } from './core-layout.component';
import { RegistrationPageComponent } from './components/registration/registration-page/registration-page.component';
import { RegistrationFormComponent } from './components/registration/registration-form/registration-form.component';

// services
import { ConsoleService } from './services/console.service';
import { ApiService } from './services/api.service';

// material
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CoreLayoutComponent,
    RegistrationFormComponent,
    RegistrationPageComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CoreLayoutComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
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
