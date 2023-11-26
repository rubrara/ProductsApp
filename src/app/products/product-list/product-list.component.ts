import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products!: Product[];
  sub!: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
