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
   public min = 4;
   public checkedCheckbox: number;
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

      // foreach all checkboxes controls and put new value 
     this.checkboxes.forEach((o, i) => {
      (this.demoForm.controls.checkboxes as FormArray).at(i).patchValue(value);
    });

    if(value == true) {
      this.demoForm.controls.checkboxes.disable({ emitEvent: false })
    }
      // pass to parent thet all checkboxes is cheched true/false
      this.isCheked.emit(value)
    })



    this.demoForm.controls.checkboxes.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(value => {
        this.checkedCheckbox = value.filter((obj) => obj === true).length;

        // disable all checkboxes FormArray form controls 
        if(this.checkedCheckbox >= this.min && value == false){
          this.demoForm.controls.checkboxes.disable({ emitEvent: false })
          
        } else {
          this.demoForm.controls.checkboxes.enable({ emitEvent: false })
        }
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
