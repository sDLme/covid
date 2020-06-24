import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      confirmPass: [''],
      
      // child inputs
      city: ['Che', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required]
    })

  }

  public onSubmit() {
		console.log(' Parent Form =>',this.userDeliveryForm.controls);
	}

}
