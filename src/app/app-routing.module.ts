import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    pathMatch: 'full'
  },
  {
    path: "overview",
    component: OverviewComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "overview/:productid",
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
