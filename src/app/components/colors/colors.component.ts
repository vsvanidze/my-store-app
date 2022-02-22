import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { colorsInterface } from 'src/app/core/interface/colorsInterface';
import { requestStatus } from 'src/app/core/models/status.enum';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorsComponent),
      multi: true,
    },
  ]
})

export class ColorsComponent implements ControlValueAccessor, OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();

  requestStatus = requestStatus;

  @Input() list!: colorsInterface;
  disabled: boolean = false;

  onChange = (value: any) => { };
  onTouched = () => { };


  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorsForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.writeValue(value);
    });
  }

  colorsForm = this.fb.group({
    color: ['', [Validators.required]],
  });

  get myForm() {
    return this.colorsForm.get('color');
  }

  writeValue(value: number): void {
    this.onChange(this.colorsForm.value);
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.colorsForm.disable();
    } else {
      this.colorsForm.enable();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
