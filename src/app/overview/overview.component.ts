import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllinoneService } from '../allinone.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  productDetails = this.service.productData;
  selectedItems?: any = [];
  isItemAdded?: boolean;

  selectedItem?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AllinoneService
  ) { }

  goToDetails(productid: number) {
    //this.router.navigateByUrl(`overview/${productid}`);
    this.router.navigate(["overview/" + productid], { relativeTo: this.activatedRoute })
    console.log("productid from overview>>", productid);
  }

  selectItem(item: any) {
    let index = this.selectedItems.length;
    this.selectedItems[index] = item;
    this.isItemAdded = true;
    // console.log("selected item >>", this.selectedItems)
    console.log("isItemAdded >>", this.isItemAdded);
  }

  getSelectedItems(): any {
    this.isItemAdded = false;
    return this.selectedItems;
  }
}
