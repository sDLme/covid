import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { AuthPageComponent } from './auth-page.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent, children: [
    { path: 'registration', component: RegistrationFormComponent}
  ] },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }