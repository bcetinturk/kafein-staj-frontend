import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {ProductDetailComponent} from './categories/product-detail/product-detail.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {BasketComponent} from './basket/basket/basket.component';
import {OrdersComponent} from './orders/orders.component';
import {OrderComponent} from './orders/order/order.component';
import {UserComponent} from './user/user.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'category/:id', component: CategoriesComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
