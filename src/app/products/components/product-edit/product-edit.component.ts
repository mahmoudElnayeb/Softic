import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../../interfaces/product';
import { filter } from 'rxjs/operators';
import { SharedService } from '../../../../services/shared.service';
import { Router } from '@angular/router';
import { OrderDetService } from '../../../../services/order.service';
import { Orders } from '../../../interfaces/orders';
import { Location } from '@angular/common'
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  selectedProd: Products[]
  userName: string = ''
  payMethod: string = 'cash'
  paymentMehod = [
    { label: "Cash", value: 'cash' },
    { label: "Online", value: 'online' },
  ]
  constructor(
    private orderServ: OrderDetService,
    private location: Location,
    private router: Router
  ) {
    this.selectedProd = this.router.getCurrentNavigation().extras.state.products
    this.selectedProd.forEach(item => item.Quantity = 1)
    console.log(this.selectedProd);



  }
  ngOnInit(): void {
  }
  onSubmit(form) {
    console.log(this.userName, this.payMethod, this.selectedProd);
    const payload = {
      OrderId: Number(Math.floor(Math.random() * 100)),
      OrderDate: Date.now(),
      PaymentType: this.payMethod,
      Products: this.selectedProd.map((item) => { return { ProductId: item.ProductId, Quantity: item.Quantity } }),
      UserId: this.userName
    }
    // console.log(payload);

    // this.orderServ.getOrders().subscribe(data => data.push(payload))
    this.orderServ.addOrder(this.orderServ.getOrders().subscribe(data => data.push(payload)))
    this.location.back()

  }



}
