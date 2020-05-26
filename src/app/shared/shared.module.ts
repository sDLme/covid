import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [ContactFormComponent],
  exports: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {

}
