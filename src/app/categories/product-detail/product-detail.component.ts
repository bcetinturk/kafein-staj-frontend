import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../categories.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  amount = 1;
  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoriesService.getProduct(+this.route.snapshot.params.id).subscribe((product) => {
      this.product = product;
    });
    this.route.params.subscribe((params) => {
      this.categoriesService.getProduct(+params.id).subscribe((product) => {
        this.product = product;
      });
    });
  }


  onSubmit(f: NgForm): void {
    console.log(f);
  }

  decrease(): void {
    this.amount = this.amount > 1 ? this.amount - 1 : this.amount;
  }

  increase(): void {
    this.amount = this.amount < this.product.quantity ? this.amount + 1 : this.amount;
  }
}
