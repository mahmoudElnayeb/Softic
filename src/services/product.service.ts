import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { retry } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get('/assets/products.json')
  }


  // getProducts(): Observable<any> {
  //   return new Observable((subscripe) => {
  //     subscripe.next(products)
  //   })
  // }
}
