import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import {AppRoutingModule} from './app-routing.module';
import { ProductComponent } from './categories/product/product.component';
import { ProductDetailComponent } from './categories/product-detail/product-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BasketComponent } from './basket/basket/basket.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { UserComponent } from './user/user.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    ProductComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    BasketComponent,
    OrdersComponent,
    OrderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
