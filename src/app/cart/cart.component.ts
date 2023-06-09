import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() selectedItems?: any = [];
  @Input() isSeen?: boolean;
  // @Output() nofityEvt = new EventEmitter;

  openCart?: boolean;
  beforeArrayLength?: any;

  showSelectedItems() {
    this.openCart = !this.openCart;

    if (this.openCart) {
      this.isSeen = true;
      console.log("isSeen >>", this.isSeen);
    }
  }

  removeItem(index: number) {
    this.selectedItems.splice(index, 1);
  }
}
