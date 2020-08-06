import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories/categories.service';
import {Category} from '../categories/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNavbarItems = false;
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getSubCategories(0)
      .subscribe(data => {
        this.categories = data;
      });
  }

}
