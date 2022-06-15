import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isVisible = false;

  constructor(
    private productServ: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // getProductData() {
  //   return this.productServ.getProducts()
  // }
  // bookIt(product) {
  //   this.router.navigate(['/products/order_detail'], { state: { itemVal: product } })
  // }


}
