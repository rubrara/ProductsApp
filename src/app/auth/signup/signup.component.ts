import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const username = form.value.username;
    const password = form.value.password;

    this.authService.signupUser(email, username, password);

    this.router.navigate(['/products']);
  }
}
