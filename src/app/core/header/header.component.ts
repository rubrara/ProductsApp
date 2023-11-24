import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  pageTitle = 'Products App';

  constructor(private router: Router) {}

  productsClicked() {
    this.router.navigate(['/products']);
  }
}
