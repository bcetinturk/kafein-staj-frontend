import {Component, OnInit} from '@angular/core';
import {Category} from './category.model';
import {CategoriesService} from './categories.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from './product.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  subcategories: Category[];
  products: Product[] = [];
  currentCategoryId: number;

  constructor(private categoriesService: CategoriesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentCategoryId = +params.id;
      this.categoriesService.getSubCategories(+params.id).subscribe((categories) => {
        this.subcategories = categories;
      });
      this.categoriesService.getProducts(this.currentCategoryId).subscribe((products) => {
        this.products = products;
        console.log(this.currentCategoryId);
      });
    });
  }

}
