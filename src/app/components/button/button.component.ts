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
  iconOfButton = iconPosition;

  @Input() buttonType: number = this.typeOfButton.fill;
  @Input() buttonView: number = this.viewOfButton.small;
  @Input() iconPlace?: number;
  @Input() buttonLabel?: string = 'button';
  @Input() buttonIcon?: string;

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.checkForValidInput(this.buttonType, this.buttonView, this.iconPlace, this.buttonLabel, this.buttonIcon);
  }

  ngOnChanges() {
    this.checkForValidInput(this.buttonType, this.buttonView, this.iconPlace, this.buttonLabel, this.buttonIcon);
  }

  click() {
    this.onClick.emit();
  }

  checkForValidInput(buttonType: number, buttonView: number, iconPlace?: number, buttonLabel?: string, buttonIcon?: string) {
    if (buttonView == this.viewOfButton.square || buttonView == this.viewOfButton.round && !buttonIcon) {
      console.error(`Error: ${buttonView == 2 ? 'Square' : 'Round'} type of button view must have an icon!`);
    } else if (buttonView == this.viewOfButton.square || buttonView == this.viewOfButton.round && buttonLabel) {
      console.error(`Error: ${buttonView == 2 ? 'Square' : 'Round'} type of button view must not have a button label!`);
    } else if (buttonType == this.typeOfButton.link && !iconPlace) {
      console.error('Error: Link type of button view must have at least an icon position!');
    } else {
      this.buttonType = buttonType;
      this.buttonView = buttonView;
      this.iconPlace = iconPlace;
      this.buttonLabel = buttonLabel;
      this.buttonIcon = buttonIcon;
    }
  }

}
