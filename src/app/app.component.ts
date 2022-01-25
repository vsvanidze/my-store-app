import { Component } from '@angular/core';
import { buttonView, buttonType, iconPosition } from './core/models/button.enum'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public type = buttonType;
  public view = buttonView;
  public icon = iconPosition;
  buttonLabel: string = 'button';
  iconCart:string = 'shopping_cart';
  iconArrowLeft:string = 'arrow_back';
  iconArrowRight:string = 'arrow_forward';

  click() {

  }
}
