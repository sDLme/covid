import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// modules 
import { ValidationErrorsModule } from './components/validation-errors/validation-errors.module';
import { InputModule } from './components/input/input.module';

// components
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactFormComponentsComponent } from './components/contact-form-component/contact-form-components/contact-form-components.component';;

//directives
import { ForScreenDirective } from './directives/for-screen.directive';

@NgModule({
  declarations: [
    ContactFormComponent, 
    ForScreenDirective,
    ContactFormComponentsComponent
  ],
  exports: [
    ReactiveFormsModule,
    ContactFormComponent,
    ForScreenDirective,
    ValidationErrorsModule,
    ContactFormComponentsComponent,
    InputModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationErrorsModule,
    InputModule
  ]
})
export class SharedModule {

}
