import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories/categories.service';
import {Category} from '../categories/category.model';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNavbarItems = false;
  categories: Category[] = [];
  user = null;

  constructor(private categoriesService: CategoriesService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.categoriesService.getSubCategories(0)
      .subscribe(data => {
        this.categories = data;
      });

    this.authService.userSubject.subscribe(user => {
      this.user = user;
    });
  }

}
