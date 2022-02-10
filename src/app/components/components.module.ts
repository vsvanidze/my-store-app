import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';
import { FooterLinksComponent } from './footer/footer-links/footer-links.component';

@NgModule({
  declarations: [
    ButtonComponent,
    FooterComponent,
    SocialMediaComponent,
    FooterLinksComponent,
    InputComponent,
  ],
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  exports: [ButtonComponent, FooterComponent],
})
export class ComponentsModule {}
