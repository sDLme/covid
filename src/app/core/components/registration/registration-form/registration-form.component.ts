import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


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
  public showAreas = false;

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
   * create country form and listener
   */
  private createForm() {
    this.registrationForm = this.fb.group({
      name: [ null, [Validators.required, Validators.minLength(4)]],
      email: [ null, [Validators.required, Validators.email]],
      countrySelect: [ null, Validators.required ],
      areaSelect: null,
      password: [ null,  [ Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      confirmPass: [ null, [Validators.required] ]
    }, {validator: this.checkPasswords});

      this.registrationForm.get('countrySelect').valueChanges
      .subscribe( value => {
        this.showAreas = true
        this.areas = this.countriesList[value]
        this.registrationForm.get('areaSelect').setValue(this.countriesList[value][0])
      });

  }

  public checkPasswords(group: FormGroup) { 
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPass').value;


   return pass === confirmPass ? null : { notSame: true }     
}

  public onSubmit() {
    console.log(this.registrationForm)
    
  };


}
