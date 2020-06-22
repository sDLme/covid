import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

// module
import { SharedModule } from '../shared/shared.module';

// components
import { AuthPageComponent } from './auth-page.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';



@NgModule({
  declarations: [
    AuthPageComponent,
    RegistrationFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedModule
  ]
})
export class AuthModule { }
