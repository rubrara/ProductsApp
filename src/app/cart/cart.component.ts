import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cartService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartProducts: Product[] = [];
  sub!: Subscription;
  totalPrice!: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // this.sub = this.cartService.changedCartProducts.subscribe((products) => {
    //   console.log('cart in cart ', products);
    //   this.cartProducts = products;
    //   this.totalPrice = this.cartProducts
    //     .map((product) => product.price)
    //     .reduce((a, b) => {
    //       return a + b;
    //     });
    // });

    this.cartProducts = this.cartService.getCartItems();
    this.totalPrice = this.getTotalPrice();
    // console.log('this is called also', this.cartProducts);
  }

  onDeleteProductFromCart(index: number) {
    this.cartService.deleteProductFromCart(index);

    this.cartProducts = this.cartService.getCartItems();
    this.totalPrice = this.getTotalPrice();
  }

  getTotalPrice(): number {
    if (this.cartProducts.length > 0) {
      return this.cartProducts
        .map((product) => product.price)
        .reduce((a, b) => {
          return a + b;
        });
    }
    return 0;
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
