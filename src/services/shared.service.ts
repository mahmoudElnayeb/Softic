import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  private selectedProduct = new BehaviorSubject([])

  assignProductSelected(prod) {
    this.selectedProduct.next(prod)
  }

  getProductSelected() { return this.selectedProduct }
}
