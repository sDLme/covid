import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public registrationForm: FormGroup;
  public countriesList: any;
  public countries: any;
  public areas: any;
  public confirmPass = true;

  constructor(
    private fb: FormBuilder,
  
    ) {
    

      this.countriesList =  { 

        germany: ['Land Baden-Württemberg', 'Freistaat Bayern', 'Land Berlin', 'Land Brandenburg', 'Freie Hansestadt Bremen'],
      
        canada: ['British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario', 'Quebec', 'New Brunswick', 'Prince Edward Island', 'Nova Scotia', 'Newfoundland and Labrador'],
       
        usa: ['Alabama', 'Alaska', 'Arizona', 'Georgia', ' Idaho', 'Kansas', 'Minnesota', 'New Mexico', 'New York']
    }
  
   }

  ngOnInit(): void {
    this.countries = Object.keys(this.countriesList)
    this.areas = Object.values(this.countriesList[this.countries[0]])
    this.createForm()
  
  }

  /**
   * create country form and input listeners
   */
  private createForm() {
    this.registrationForm = this.fb.group({
      name: [
        null, 
        Validators.required,
        Validators.minLength(4),
      ],
      email: [
        null, 
        Validators.required, 
        Validators.email
      ],
      country_select: [
        this.countries[0],
        Validators.required
      ],
      area_select: this.areas[0],
      password: [null, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')],
      confirm_pass: [null]
    });

      this.registrationForm.get('country_select').valueChanges
      .subscribe( value => {
        this.registrationForm.get('area_select').setValue(this.countriesList[value][0])
        this.areas = this.countriesList[value]
      });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }
  

  public onSubmit() {
    console.log(this.registrationForm.controls)
  }

}
