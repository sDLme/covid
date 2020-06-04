import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { RegistrationPageComponent } from './registration-page.component';

const routes: Routes = [
  { path: '', component: RegistrationPageComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
