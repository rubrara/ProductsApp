import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ProductModule } from './products/product.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cartService';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
