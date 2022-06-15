import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeAll, concatMap, filter, mergeMap, merge, map } from 'rxjs/operators';
import { Orders } from '../app/interfaces/orders';
// import { products } from '../data_center/product_json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get('/assets/users.json')
  }
}
