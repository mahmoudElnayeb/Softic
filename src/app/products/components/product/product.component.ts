import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { Products } from '../../../interfaces/product';
import { SharedService } from '../../../../services/shared.service';



@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Products[]
  cartProduct: any = []
  selectedProduct: Products = {
    ProductId: 0,
    ProductImg: '',
    ProductName: '',
    AvailablePieces: 0,
    ProductPrice: 0,
  };
  constructor(
    private productServ: ProductService,
    private router: Router,
    private share: SharedService
  ) { }


  ngOnInit(): void {
    this.getProductData()
  }
  getProductData() {
    return this.productServ.getProducts().subscribe(data => this.products = data)
  }
  bookIt(prod: Products) {
    this.cartProduct.push(prod)
  }

  getProduct(prod) {
    this.selectedProduct = prod
  }
  onSubmit(form) {
    this.products.filter((prod: Products) => prod.ProductId === this.selectedProduct.ProductId)[0].Quantity = form.Product_Quan
  }
  goToPill() {
    this.router.navigate(['/products/prodEdit'], { state: { products: this.cartProduct } })
  }

  trackByFn(ind, item: Products) {
    return item.ProductId
  }

}
