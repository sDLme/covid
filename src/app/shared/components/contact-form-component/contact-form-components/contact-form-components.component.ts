import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form-components',
  templateUrl: './contact-form-components.component.html',
  styleUrls: ['./contact-form-components.component.scss']
})
export class ContactFormComponentsComponent implements OnInit {

  @Output()
	private formReady : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
	public form: FormGroup; 

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			city: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	ngOnInit(): void {
		this.formReady.emit(this.form);
	}

	public onSubmit() {
		console.log(' Child Form =>',this.form.value);
	}

}
