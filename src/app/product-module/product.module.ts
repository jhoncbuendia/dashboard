import { NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductService} from "./product.service";

@NgModule({
  imports: [CommonModule],
  providers: [ProductService],
  declarations: [ProductListComponent, ProductDetailComponent],
  exports: [ ProductListComponent ]
})
export class ProductModule {}
