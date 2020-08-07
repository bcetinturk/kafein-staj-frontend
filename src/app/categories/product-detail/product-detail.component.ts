import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    productName: 'Huawei P40 Lite',
    productId: 20,
    quantity: 20,
    price: 6000,
    categoryId: 2, // should be category name
    description: 'Cheapest ever'
  };
  amount: number = 1;
  constructor() { }

  ngOnInit(): void {
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
