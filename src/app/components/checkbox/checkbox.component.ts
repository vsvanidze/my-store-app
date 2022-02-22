import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { checkboxInterface } from 'src/app/core/interface/checkboxInterface';
import { requestStatus } from 'src/app/core/models/status.enum';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ]
})

export class CheckboxComponent implements ControlValueAccessor, OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();

  requestStatus = requestStatus;

  @Input() list!: checkboxInterface;
  disabled: boolean = false;


  onChange = (value: any) => { };
  onTouched = () => { };

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.writeValue(value);
    });
    this.generateForm();
  }

  form = this.fb.group({
    checkboxGroup: this.fb.array([])
  });

  generateForm() {
    const formArray = this.myForm;
    this.list.inputData.forEach((item) => {
      formArray.push(
        this.fb.group({
          value: this.fb.control(item.value),
          checked: this.fb.control(item.checked),
        })
      );
    });
  }

  get myForm(): FormArray {
    return this.form.controls['checkboxGroup'] as FormArray;
  }

  getControlById(): FormArray {
    return this.form.get('checkboxGroup') as FormArray;
  }

  writeValue(value: number): void {
    this.onChange(this.form.value);
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}