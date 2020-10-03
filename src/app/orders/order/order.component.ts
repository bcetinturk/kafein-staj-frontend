import { Component, OnInit } from '@angular/core';
import {Order} from '../order.model';
import {OrderService} from '../order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderService.getOrder(+params.id).then(order => {
        this.order = order;
      });
    });
  }

  cancelOrder(): void {
    this.orderService.cancelOrder(this.order.orderId)
      .subscribe(() => {
        this.order.status = 'Cancelled';
      });
  }
}
