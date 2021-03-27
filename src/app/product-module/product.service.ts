import { Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {IProduct} from "./product.model";

@Injectable()
export class ProductService{
  constructor() {
  }

  public getProducts(): Observable<IProduct[]> {
    const productList: IProduct[] = [{ name: "product 1", id: 0, storeUrl: "url"}, { name: "product2", id: 1, storeUrl: "url"}];
    const products: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>(productList);
    return products.asObservable();
  }
}
