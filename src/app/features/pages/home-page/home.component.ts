import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userDeliveryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  private createForm() {

    this.userDeliveryForm = this.fb.group({
      name: [''],
      phone: [''],
      confirmPass: ['']
    })
  }

  public addFormControl(name: string, formGroup: FormGroup) : void {
		this.userDeliveryForm.addControl(name, formGroup);
  }
  
  public onSubmit() {
		console.log(' Parent Form =>',this.userDeliveryForm.value);
	}




}
