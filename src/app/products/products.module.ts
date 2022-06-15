import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
