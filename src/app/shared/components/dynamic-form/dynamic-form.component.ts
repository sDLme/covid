import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})


export class DynamicFormComponent implements OnInit, OnDestroy {

   public demoForm: FormGroup;
   public arrayItems = [
    {id: 1, title: "title1", checked: true},
    {id: 2, title: "title2", checked: false},
    {id: 3, title: "title3", checked: true},
    {id: 4, title: "title4", checked: false},
    {id: 5, title: "title5", checked: false}
  ];
  private destroy$: Subject<boolean> = new Subject<boolean>();

   constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      toggle: [''],
      checkboxes: this.fb.array([])
    });
   }

   ngOnInit() {
     this.addItems()
     this.toggle()
   }

   ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.complete();
  }


   get demoArray() {
    return this.demoForm.get('checkboxes') as FormArray;
   };

  private addItems() {
    this.demoArray.push(this.fb.control(this.arrayItems));
  }

  private toggle() {
    this.demoForm.get('toggle').valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe( value => {
      this.arrayItems.forEach(item => item.checked = value);
    })
  }

}
