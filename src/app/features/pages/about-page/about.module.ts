import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../../../shared/shared.module';

// components
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [AboutComponent],
    imports: [
        CommonModule,
        AboutRoutingModule,
        SharedModule,

    ]
})
export class AboutModule { }
