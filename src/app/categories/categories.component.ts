import { Component, OnInit } from '@angular/core';
import {Category} from './category.model';
import {CategoriesService} from './categories.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  subcategories: Category[];

  constructor(private categoriesService: CategoriesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoriesService.getSubCategories(+params.id).subscribe((categories) => {
        this.subcategories = categories;
      });
    });
  }

}
