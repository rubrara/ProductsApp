import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ProductModule } from './products/product.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cartService';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './services/authService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CartService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
