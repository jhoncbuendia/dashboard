import { Component, OnInit } from "@angular/core";
import {ProductService} from "../product.service";
import {Observable} from "rxjs";
import {IProduct} from "../product.model";

@Component({
  selector: "product-list",
  templateUrl: "product-list.component.html"
})
export class ProductListComponent implements OnInit{

  public productList$: Observable<IProduct[]>;
  constructor(private productService: ProductService) {
  }

  public ngOnInit() {
    this.productList$ = this.productService.getProducts();
  }

};
