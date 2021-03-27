import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {IProduct} from "../product.model";

@Component({
  selector: "product-detail",
  templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent{
  @Input() product: IProduct;
  @Output() productSelected = new EventEmitter<number>();

  public selectProduct(product: IProduct): void {
    console.log(product)
  }

};
