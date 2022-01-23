import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType: number = 0;
  @Input() buttonView: number = 0;
  @Input() iconType?: number;
  @Input() buttonLabel?: string = 'button';

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>(); //to move in pipe 
  @Output() onAddCart: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  click(){ //future logic is to send input info
    const info:string = 'button clicked';
    this.onClick.emit(info);
  }

  addToCart(){//future logic is to send input info in cart
    const info:string = 'added to cart';
    this.onAddCart.emit(info);
  }

  getType(val:any) { //Is it better to move in the custom pipe?   
    return typeof val;
  }

}
