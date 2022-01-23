import { Component } from '@angular/core';
import { buttonView, buttonType, buttonIcon } from './core/models/button.enum'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-app'; 
  public type = buttonType;
  public view = buttonView;  
  public icon = buttonIcon;
  buttonLabel: string = 'button';

  click(info:string) {
    console.log('clicked', info);
  }
  add(info:string){
    console.log('clicked', info);
  }
}
