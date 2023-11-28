import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cartService';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id!: number;
  product!: Product | null;
  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  addToCart() {
    if (this.product) this.cartService.addToCart(this.product);
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.sub = this.productService.getProduct(this.id).subscribe((product) => {
      setTimeout(() => {
        if (product) this.product = product;
      }, 300);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
