import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ReviewService } from '../services/reviewService';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ReviewsComponent,
  ],
  imports: [FormsModule, CommonModule, ProductsRoutingModule],
  providers: [ProductService, ReviewService],
})
export class ProductModule {}
