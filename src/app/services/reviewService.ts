import { Observable, Subject } from 'rxjs';
import { Review } from '../models/Review';
import { ReviewData } from '../data/review-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private reviews: Review[] = ReviewData.reviews;
  public reviewsSubject = new Subject<Review[]>();

  reviews$ = this.reviewsSubject.asObservable();

  getAllReviews(): Observable<Review[]> {
    return new Observable((observer) => {
      observer.next([...this.reviews]); // Deep copy to ensure immutability
      observer.complete();
    });
  }

  getReviewsForProduct(productId: number): Observable<Review[]> {
    const filteredReviews = this.reviews.filter(
      (review) => review.productId === productId
    );
    this.reviewsSubject.next(filteredReviews); // Emit the filtered reviews
    return new Observable((observer) => {
      observer.next(filteredReviews);
      observer.complete();
    });
  }
}
