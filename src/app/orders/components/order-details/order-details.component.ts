import { Component, Input, OnInit } from '@angular/core';
import { Orders } from '../../../interfaces/orders';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  @Input('orders') orders: Orders
  constructor() {
    console.log(this.orders);

  }

  ngOnInit(): void {
  }

}
