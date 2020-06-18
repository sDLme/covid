import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})


export class DynamicFormComponent implements OnInit, OnDestroy {


  @Input() checkboxes;
  @Output() isCheked: EventEmitter<number> = new EventEmitter<number>();

   public demoForm: FormGroup;
   public array: any;
   public min = 3;
   private destroy$: Subject<boolean> = new Subject<boolean>();

   constructor(private fb: FormBuilder) {
    this._createForm()
   }

   ngOnInit() {
    this.addCheckboxes()
   }

   ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.complete();
  }


  private _createForm() {
    this.demoForm = this.fb.group({
      toggle: [''],
      checkboxes: this.fb.array([])
    });

    this.demoForm.get('toggle').valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe( value => {
      this.checkboxes.forEach(item => item.checked = value);
      const count = this.checkboxes.filter((obj) => obj.checked === true).length;
      this.isCheked.emit(value)
    })

    this.demoForm.controls.checkboxes.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(value => {
    
      const count = this.checkboxes.filter((obj) => obj.checked === true).length;
      console.log(count)
      })
    

  }

   get demoArray() {
     return  this.demoForm.get('checkboxes') as FormArray;
   };

  private addCheckboxes() {
    this.checkboxes.forEach((o, i) => {
      const control = this.fb.control(o.checked); // put cheked value from API data
      (this.demoForm.controls.checkboxes as FormArray).push(control);
    });

  }

}
