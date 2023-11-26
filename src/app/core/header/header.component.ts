import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cartService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [ProductService],
})
export class HeaderComponent implements OnInit {
  pageTitle = 'Products App';

  sub!: Subscription;

  cartSize!: number;

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  productsClicked() {
    this.router.navigate(['/products']);
  }

  onSave() {
    this.productService.saveProducts().subscribe();
  }

  ngOnInit() {
    this.cartService.changedCartProducts.subscribe((products) => {
      console.log('Cart items updated in header:', products);
      this.cartSize = products.length;
    });
  }
}
