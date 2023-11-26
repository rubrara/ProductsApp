import { Subject } from 'rxjs';
import { Product } from '../models/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: Product[] = [];
  private cartSize: number = 0;

  changedCartProducts = new Subject<Product[]>();

  addToCart(product: Product) {
    console.log('item added to cart: ', product);
    this.cartProducts.push(product);
    this.cartSize += 1;
    this.saveCartFromSubject(this.getCartItems());

    console.log('the whole cart', this.getCartItems());
    console.log('emitting changedCartProducts:', this.getCartItems());
  }

  getCartItems() {
    return this.cartProducts.slice();
  }

  saveCartFromSubject(products: Product[]) {
    this.changedCartProducts.next(products);
  }

  getSize() {
    return this.cartSize;
  }
}
