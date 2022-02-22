import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';
import { FooterLinksComponent } from './footer/footer-links/footer-links.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CounterComponent } from './counter/counter.component';
import { ColorsComponent } from './colors/colors.component';


@NgModule({
  declarations: [
    ButtonComponent,
    FooterComponent,
    SocialMediaComponent,
    FooterLinksComponent,
    RadioComponent,
    CheckboxComponent,
    CounterComponent,
    ColorsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    FooterComponent,
    RadioComponent,
    CheckboxComponent,
    CounterComponent,
    ColorsComponent
  ]
})

export class ComponentsModule { }
