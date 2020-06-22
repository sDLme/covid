import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// component
import { DynamicFormComponent } from './dynamic-form.component';
import { SharedModule } from '../../shared.module';




@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule { }
