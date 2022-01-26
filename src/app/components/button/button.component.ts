import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { buttonView, buttonType, iconPosition } from 'src/app/core/models/button.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  typeOfButton = buttonType;
  viewOfButton = buttonView;
  iconOfButton= iconPosition;

  @Input() buttonType: number = this.typeOfButton.fill;
  @Input() buttonView: number = this.viewOfButton.small;
  @Input() iconPlace?: number;
  @Input() buttonLabel?: string = 'button';
  @Input() buttonIcon?: string;

  @Output() onClick: EventEmitter<any> = new EventEmitter();   
  
  click(){ 
    this.onClick.emit();
  }
}
