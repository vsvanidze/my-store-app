import { Component, Input } from '@angular/core';

import { searchDataInterface } from 'src/app/core/interface/searchDataInterface';
import { buttonView, buttonType, iconPosition } from 'src/app/core/models/button.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  public type = buttonType;
  public view = buttonView;
  public icon = iconPosition;

  iconCart: string = 'arrow_right_alt';

  @Input() cardInfo!: Array<searchDataInterface>;

}
