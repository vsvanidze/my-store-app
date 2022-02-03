import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputType } from 'src/app/core/models/input-type';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  inputType = InputType;

  @Input()
  type?: number;

  @Output()
  inputEvent: EventEmitter<string> = new EventEmitter();

  inputForm = this.fb.group({
    input: '',
  });

  constructor(private fb: FormBuilder) {}

  onInputText(text: string) {
    this.inputEvent.emit(text);
  }

  get inputValue() {
    return this.inputForm.value.input;
  }
}
