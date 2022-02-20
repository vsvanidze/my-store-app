import { Component } from '@angular/core';
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

export class AppComponent {
}
