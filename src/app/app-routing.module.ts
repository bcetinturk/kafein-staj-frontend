import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {AppComponent} from './app.component';
import {ProductDetailComponent} from './categories/product-detail/product-detail.component';

const appRoutes: Routes = [
  {path: 'category/:id', component: CategoriesComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
