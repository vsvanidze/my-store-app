import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ButtonComponent, InputComponent],
})
export class ComponentsModule {}
