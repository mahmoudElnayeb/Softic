import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeAll, concatMap, filter, mergeMap, merge, map } from 'rxjs/operators';
import { Orders } from '../app/interfaces/orders';
// import { products } from '../data_center/product_json';

@Injectable({
  providedIn: 'root'
})
export class OrderDetService {
  constructor(
    private http: HttpClient
  ) { }

  getOrders(): Observable<any> {
    return this.http.get('/assets/orders.json')
  }
  getOneOrder(id): Observable<any> {
    return this.http.get('/assets/orders.json').pipe(filter((data: Orders) => data.OrderId === id))
  }
  addOrder(order): Observable<any> {
    return this.http.post('/assets/orders.json', order)

  }
}
