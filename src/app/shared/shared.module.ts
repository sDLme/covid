import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { ContactFormComponent } from './components/contact-form/contact-form.component';

//directives
import { ForScreenDirective } from './directives/for-screen.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    ContactFormComponent, 
    ForScreenDirective,
    DynamicFormComponent
  ],
  exports: [
    ContactFormComponent,
    ForScreenDirective,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {

}
