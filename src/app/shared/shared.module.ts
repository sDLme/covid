import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// modules 
import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';
import { ValidationErrorsModule } from './components/validation-errors/validation-errors.module';

// components
import { ContactFormComponent } from './components/contact-form/contact-form.component';

//directives
import { ForScreenDirective } from './directives/for-screen.directive';

@NgModule({
  declarations: [
    ContactFormComponent, 
    ForScreenDirective
  ],
  exports: [
    ContactFormComponent,
    ForScreenDirective,
    DynamicFormModule,
    ValidationErrorsModule,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormModule,
    ValidationErrorsModule
  ]
})
export class SharedModule {

}
