import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { LabelPosition } from './labelPosition'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public formControlName: AbstractControl;
  public position = LabelPosition;
  @Input() labelPosition: LabelPosition;
  @Input() label: string;
  @Input() inputType: string;
  @Input() inputName: string;
  @Input() placeholder: string;
  @Input() inputClass: string;

  constructor(
    private parentForm: FormGroupDirective){}
    
  ngOnInit(): void {
    this.formControlName = this.parentForm.form.get(this.inputName);
  }

}
