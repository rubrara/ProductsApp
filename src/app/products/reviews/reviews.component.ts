import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Review } from 'src/app/models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less'],
})
export class ReviewsComponent implements OnInit, OnDestroy {
  items: any;
  @Input('reviewList')
  set reviewList(value: Review[]) {
    if (!!value) {
      this.items = value;
      this.show();
    }
  }
  @Input() productName!: string;
  @Output() toDisplaySidebar: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor() {}

  hideReviewsSidebar() {
    var reviewsSidebar = document.getElementById('reviewsSidebar');
    reviewsSidebar!.style.right = '-400px';
  }

  ngOnInit() {
    var reviewsSidebar = document.getElementById('reviewsSidebar');
    reviewsSidebar!.style.right = '0';
  }

  show() {
    var reviewsSidebar = document.getElementById('reviewsSidebar');
    reviewsSidebar!.style.right = '0';
  }

  ngOnDestroy() {}
}
