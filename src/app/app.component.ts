import { Component, OnInit } from '@angular/core';
import { buttonView, buttonType, iconPosition } from './core/models/button.enum';
import { counterStyle } from 'src/app/core/models/counter.enum';
import { FormBuilder } from '@angular/forms';

import { radioInterface } from 'src/app/core/interface/radioInterface';
import { radioData } from './core/constants/radioData';

import { checkboxInterface } from 'src/app/core/interface/checkboxInterface';
import { checkboxData } from './core/constants/checkboxData';

import { colorsInterface } from './core/interface/colorsInterface';
import { colorsData } from './core/constants/colorsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  counterStyle = counterStyle;

  listOfRadio: radioInterface = radioData;
  listOfCheckbox: checkboxInterface = checkboxData;
  listOfColors: colorsInterface = colorsData;

  constructor(public fb: FormBuilder) { }

  main = this.fb.group({
    radio: this.fb.control(null),
    checkbox: this.fb.control(null),
    counter: this.fb.control(0),
    colors: this.fb.control(null)
  });

  ngOnInit(): void {
    this.main.valueChanges.subscribe((value) => {
      /* console.log(value); */
    });
  }
}
