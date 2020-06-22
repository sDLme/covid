import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ClassesRoutingModule } from './classes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { ClassesComponent } from './classes.component';

// Matirial
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [ClassesComponent],
    imports: [
        CommonModule,
        ClassesRoutingModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        SharedModule
    ]
})
export class ClassesModule { }
