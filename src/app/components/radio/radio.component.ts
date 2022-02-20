import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { radioInterface } from 'src/app/core/interface/radioInterface';
import { requestStatus } from 'src/app/core/models/status.enum';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ]
})
export class RadioComponent implements ControlValueAccessor, OnInit {

  requestStatus = requestStatus;

  @Input() list!: radioInterface;
  disabled: boolean = false;

  onChange = (value: any) => { };
  onTouched = () => { };

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.radioForm.valueChanges.subscribe((value) => {
      this.writeValue(value);
    });
  }

  radioForm = this.fb.group({
    radio: ['', [Validators.required]],
  });

  get myForm() {
    return this.radioForm.get('radio');
  }

  writeValue(value: number): void {
    this.onChange(this.radioForm.value);
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
