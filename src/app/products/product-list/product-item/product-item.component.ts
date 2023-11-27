import { Subscription, take } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Review } from 'src/app/models/Review';
import { ReviewService } from 'src/app/services/reviewService';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() index!: number;
  @Output() showReview: EventEmitter<Product> = new EventEmitter<Product>();

  sub!: Subscription;

  hover: boolean = false;

  constructor(
    private router: Router,
    private thisRoute: ActivatedRoute,
    private reviewsService: ReviewService
  ) {}

  ngOnInit(): void {
    // // this.reviewsMap.push(this.reviewsService.getReviewsForProduct(this.index));
    // this.reviewsService.getAllReviews().subscribe((reviews) => {
    //   this.reviewsForProduct = reviews.filter(
    //     (review) => review.productId === this.index
    //   );
    // });
  }

  onDetailsClicked() {
    setTimeout(() => {
      this.router.navigate([this.index], {
        relativeTo: this.thisRoute,
      });
    }, 200);
  }

  onReviewsClicked() {
    this.showReview.emit(this.product);
  }
}
