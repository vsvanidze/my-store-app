import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { counterStyle } from 'src/app/core/models/counter.enum';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor, OnInit {

  counterStyles = counterStyle;

  @Input() counterStyle?: number;
  @Input() incrementNumber: number = 1;
  disabled: boolean = false;

  counterValue: number = 0;

  onChange = (value: any) => { };
  onTouche = () => { };

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.counterForm.valueChanges.subscribe((value) => {
      this.writeValue(value);
    });
  }

  counterForm = this.fb.group({
    counter: ['0', [Validators.required]],
  });

  get myForm() {
    return this.counterForm.get('counter');
  }

  minus() {
    this.onTouche();

    if (this.counterValue > 1) {
      this.counterValue -= this.incrementNumber;
    } else {
      this.counterValue = 1;
    }

    this.onChange(this.counterValue);
  }

  plus() {
    this.onTouche();

    if (this.counterValue >= 1) {
      this.counterValue += this.incrementNumber;
    } else {
      this.counterValue = 1;
    }

    this.onChange(this.counterValue);
  }

  writeValue(fn: any): void {
    this.counterValue = fn;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouche = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
