import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form-components',
  templateUrl: './contact-form-components.component.html',
})
export class ContactFormComponentsComponent {

/**
 * Parent FormGroup for inputs of this component
*/
  @Input() parentForm: FormGroup;
  

  constructor() {}

}
