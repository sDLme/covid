import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public myFirstReactiveForm: FormGroup;
  public userTypes: string[];
  private userTypeSubscription: Subscription;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userTypes = ['admin', 'user'];
    this.initForm();
    this.subscribeToUserType();
  }
  ngOnDestroy() {
    this.userTypeSubscription.unsubscribe();
  }

  initForm(){
    this.myFirstReactiveForm = this.fb.group({
      name: [null, Validators.required],
      email: [
        null,
        Validators.required,
        Validators.email],
      select: [null, Validators.required],
      body: [null, Validators.required, Validators.min(100)]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;

    if (this.myFirstReactiveForm.invalid) {

      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    console.log(this.myFirstReactiveForm.value);
  }

  private subscribeToUserType(): void {
    this.userTypeSubscription = this.myFirstReactiveForm.get('selector')
      .valueChanges
      .subscribe(value => this.toggleAddressValidators(value));
  }

  private toggleAddressValidators(userType): void {
    const address = this.myFirstReactiveForm.get('body');
    const bodyValidators: ValidatorFn[] = [
      Validators.required,
      Validators.max(20)
    ];
    if (userType !== this.userTypes[1]) {
      address.setValidators(bodyValidators);
    } else {
      address.clearValidators();
    }
    address.updateValueAndValidity();
  }

}
