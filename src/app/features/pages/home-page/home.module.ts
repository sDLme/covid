import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { HomeRoutingModule } from './home-routing.module';

// components
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {

}
