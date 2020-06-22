import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { AuthPageComponent } from './auth-page.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }