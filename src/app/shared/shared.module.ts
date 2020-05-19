import { ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ClassesModule } from '../features/classes/classes-page/classes.module';



@NgModule({
  declarations: [ContactFormComponent],
  exports: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ClassesModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {

}
