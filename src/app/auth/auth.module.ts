import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

// module
import { SharedModule } from '../shared/shared.module';

// components
import { AuthPageComponent } from './auth-page.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthPageComponent,
    RegistrationFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
