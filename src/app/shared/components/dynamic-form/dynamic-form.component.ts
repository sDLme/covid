import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})


export class DynamicFormComponent implements OnInit {

  public demoForm: FormGroup;
   
   arrayItems: {
     id: number;
     title: string;
     check: boolean;
   }[];
   constructor(private fb: FormBuilder) {
      
   }

   ngOnInit() {
     this.arrayItems = [
       {id: 1, title: "title1", check: true},
       {id: 2, title: "title2", check: false},
       {id: 3, title: "title3", check: true},
       {id: 4, title: "title4", check: false},
       {id: 5, title: "title5", check: false}
     ];
   }

  this.demoForm = this.fb.group({
    demoArray: this.fb.array([
      this.fb.control(this.arrayItems)
    ])
 });

}
