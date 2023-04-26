import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllinoneService } from '../allinone.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AllinoneService
  ) { }

  routeId: string = '';

  productImg: string = '';
  productName: string = '';
  productFrom: string = '';
  productNutrients: string = '';
  productQuantity: string = '';
  productPrice: string = '';
  isOrganic?: boolean;
  productDescription: string = '';

  productDetails = this.service.productData;

  ngOnInit(): void {
    this.routeId = this.activatedRoute.snapshot.params['productid'];
    console.log("current id>>", this.activatedRoute.snapshot.params['productid'])

    //const productIndex = parseInt(this.routeId) - 1;
    const productIndex = this.productDetails[parseInt(this.routeId) - 1];

    this.productImg = productIndex['image'];
    this.productName = productIndex['productName'];
    this.productFrom = productIndex['from'];
    this.productNutrients = productIndex['nutrients'];
    this.productQuantity = productIndex['quantity'];
    this.productPrice = productIndex['price'];
    this.isOrganic = productIndex['organic'];
    this.productDescription = productIndex['description'];
  }
}
