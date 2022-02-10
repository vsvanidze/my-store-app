import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputType } from 'src/app/core/models/input-type';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnDestroy {
  inputType = InputType;

  @Input()
  type?: number;

  @Output()
  inputEvent: EventEmitter<string> = new EventEmitter();

  inputForm = this.fb.group({
    input: '',
  });

  onChangeSub!: Subscription;
  onTouched = () => {};

  constructor(private fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }

  onInputText(text: string) {
    this.inputEvent.emit(text);
  }

  writeValue(value: any) {
    if (value) {
      this.inputForm.setValue(value);
    }
  }

  registerOnChange(onChange: any) {
    this.onChangeSub = this.inputForm.valueChanges.subscribe(onChange);
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.inputForm.disable();
    } else {
      this.inputForm.enable();
    }
  }
}
