import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [ClassesComponent],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MatTableModule,
    MatSortModule
  ]
})
export class ClassesModule { }
