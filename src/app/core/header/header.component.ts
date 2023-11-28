import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cartService';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [ProductService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  pageTitle = 'Products App';

  sub!: Subscription;

  cartSize!: number;

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  productsClicked() {
    this.router.navigate(['/products']);
  }

  onSave() {
    this.productService.saveProducts().subscribe();
  }

  getAuthService() {
    return this.authService;
  }

  ngOnInit() {
    this.sub = this.cartService.changedCartProducts.subscribe((products) => {
      console.log('Cart items updated in header:', products);
      this.cartSize = products.length;
    });
  }

  onLogoutClicked() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onLogoClick() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  }
}
