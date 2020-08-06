import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: 'category/:id', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
