import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() selectedItems?: any = [];
  isSeen?: boolean;
  openCart?: boolean;

  showCartInside() {
    // if (this.openCart) {
    //   this.openCart = false;
    //   console.log("ran if block. openCart >>", this.openCart)
    // } else {
    //   this.openCart = true;
    //   console.log("ran else block. openCart >>", this.openCart)
    // }
    this.openCart = !this.openCart;
    this.isSeen = true;
  }
}
