import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { MamberFormComponent } from './insert-page/mamber-form/mamber-form.component';
import { InsertPageComponent } from './insert-page/insert-page.component';
import { OutputPageComponent } from './output-page/output-page.component';



@NgModule({
  declarations: [
    MamberFormComponent,
    InsertPageComponent,
    OutputPageComponent],
  imports: [
    CommonModule
  ]
})
export class CompetitionModule { }
