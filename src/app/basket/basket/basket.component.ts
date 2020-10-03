import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface Basket {
  productId: number;
  productName: string;
  price: number;
  amount: number;
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket: Basket[];

  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Basket[]>('http://localhost:8080/user/basket')
      .subscribe((resp) => {
      console.log(resp);
      this.basket = resp;
    });
  }

  getTotal(): number {
    return this.basket.reduce((current, basketItem) => current + basketItem.price * basketItem.amount, 0);
  }

  deleteItem(productId: number): void {

    this.http.delete(`http://localhost:8080/user/basket/${productId}`)
      .subscribe(() => {
      // when the request is successful, delete item from locally
      this.basket = this.basket.filter(item => item.productId !== productId);
    });
  }

  placeOrder(): void {

    this.http.post('http://localhost:8080/order/new', null)
      .subscribe(() => {
      console.log('orders placed');
    });
  }
}
