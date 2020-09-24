import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';

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
    private http: HttpClient,
    private authService: AuthService) { }

  ngOnInit(): void {
    const user = this.authService.userSubject.getValue();
    this.http.get<Basket[]>('http://localhost:8080/user/basket', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${user.token}`)
    }).subscribe((resp) => {
      console.log(resp);
      this.basket = resp;
    });
  }

  getTotal(): number {
    return this.basket.reduce((current, basketItem) => current + basketItem.price * basketItem.amount, 0);
  }

  deleteItem(productId: number): void {
    const user = this.authService.userSubject.getValue();
    this.http.delete(`http://localhost:8080/user/basket/${productId}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${user.token}`),
    }).subscribe(() => {
      // when the request is successful, delete item from locally
      this.basket = this.basket.filter(item => item.productId !== productId);
    });
  }
}
