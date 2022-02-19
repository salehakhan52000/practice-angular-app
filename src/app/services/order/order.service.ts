import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  count: number = 0;

  public cart: BehaviorSubject<any> = new BehaviorSubject(null);
  cart$ = this.cart.asObservable();

  constructor() {}

  addCartItem() {
    this.count = this.count+1
    this.cart.next(this.count);
    console.log(this.cart);
  }
}
