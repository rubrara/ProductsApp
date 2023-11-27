import { Review } from './../../models/Review';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/reviewService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products!: Product[];
  sub!: Subscription;
  reviewsToShow!: Review[];

  product!: Product;

  constructor(
    private productService: ProductService,
    private revService: ReviewService
  ) {}

  activeProduct(data: Product) {
    this.product = data;

    this.revService.getReviewsForProduct(this.product.id).subscribe((data) => {
      this.reviewsToShow = data;
    });
  }

  getReviewsForProduct() {
    return;
  }

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
