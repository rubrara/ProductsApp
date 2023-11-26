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
  private sub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.sub = this.cartService.changedCartProducts.subscribe({
    //   next: (products) => {
    //     console.log('>SD>');
    //     console.log('cart in cart ', products);
    //     this.cartProducts = products;
    //   },
    //   error: (err) => console.log(err),
    // });

    this.cartProducts = this.cartService.getCartItems();
    console.log('this is called also', this.cartProducts);
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
