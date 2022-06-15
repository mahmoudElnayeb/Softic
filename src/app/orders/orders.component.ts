import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { OrderDetService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { Products } from '../interfaces/product';
import { Orders } from '../interfaces/orders';
import { UserService } from '../../services/user.service';
import { Users } from '../interfaces/Users';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders$: Orders[] = []
  products$: Products[] = []
  users$: Users[] = []
  currentOrder: Orders;
  constructor(
    private orderServ: OrderDetService,
    private productServ: ProductService,
    private userServ: UserService
  ) { }

  ngOnInit(): void {
    this.prepareData()
  }

  prepareData() {
    forkJoin({
      products: this.productServ.getProducts(),
      orders: this.orderServ.getOrders(),
      users: this.userServ.getUsers()
    }).subscribe(({ products, orders, users }: any) => {
      this.orders$ = orders
      this.products$ = products
      this.users$ = users
      orders.forEach((order: Orders) => {
        order.totalPrice = 0;
        order.Products.forEach((prod: Products) => { prod.ProductPrice = products.filter(pro => prod.ProductId === pro.ProductId)[0].ProductPrice; prod.img = products.filter(pro => prod.ProductId === pro.ProductId)[0].ProductImg; prod.name = products.filter(pro => prod.ProductId === pro.ProductId)[0].ProductName; order.totalPrice += products.filter((pro: any) => prod.ProductId === pro.ProductId)[0].ProductPrice * prod.Quantity; prod.img = products.filter(pro => prod.ProductId === pro.ProductId)[0].ProductImg; order.user = users.filter((user: Users) => user.Id === order.UserId)[0] })
      });

    })
  }

  findOrderData(order) {
    this.currentOrder = order

  }

  //  this.updatedOrdre = orders.forEach(order => {
  //    order.Products.forEach((prod: any) => { prod.totalPrice = products.filter(pro => prod.ProductId === pro.ProductId)[0].ProductPrice * prod.Quantity; order.user = users.filter(user => user.Id === order.UserId)[0] })
  //  });
}
