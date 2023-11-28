import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less'],
})
export class SigninComponent {
  badRequest = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService
      .signinUser(email, password)
      .then((resp) => {
        this.badRequest = false;
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.badRequest = true;
      });
  }
}
