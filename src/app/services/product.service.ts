import { Injectable } from '@angular/core';
import { ProductData } from '../data/product-data';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';

@Injectable()
export class ProductService {
  private products: Product[] = ProductData.products;
  dbUrl =
    'https://products-app-422ca-default-rtdb.europe-west1.firebasedatabase.app/';

  productsSubject = new Subject<Product[]>();

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.dbUrl + 'products.json');
  }

  getProduct(id: number) {
    // return this.products.at(id);
    return this.http.get<Product[]>(this.dbUrl + 'products.json').pipe(
      map((products) => {
        return products.find((products) => products.id === id);
      })
    );
  }

  saveProducts() {
    return this.http.put(
      this.dbUrl + 'products.json',
      // this.getTheProductsWithChanged()
      this.products.slice()
    );
  }

  getTheProductsWithChanged() {
    return this.productsSubject.next(this.products.slice());
  }
}
