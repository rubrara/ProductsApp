import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() index!: number;

  constructor(private router: Router, private thisRoute: ActivatedRoute) {}

  hover: boolean = false;

  showReviews() {}
}
