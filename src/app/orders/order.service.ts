import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from './order.model';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[];

  constructor(private authService: AuthService, private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:8080/orders')
      .pipe(tap(orders => {
      this.orders = orders;
    }));
  }

  getOrder(orderId: number): Promise<Order> {
    return new Promise<Order>((resolve, reject) => {
      // if user already got the orders, use local copy, do not make request
      if (this.orders) {
        resolve(this.orders.find(order => order.orderId === orderId));
      }

      // Fallback to making request
      this.http.get<Order>(`http://localhost:8080/order/${orderId}`).subscribe(order => {
        resolve(order);
      });
    });
  }

  cancelOrder(orderId: number): Observable<any> {
    return this.http.patch(`http://localhost:8080/order/${orderId}`, null);
  }
}
