import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  addItem: number = 0;
  subs: Subscription;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.subs = this.orderService.cart$.subscribe((res) => {
      this.addItem = res;
    });
  }

  ngOnDestroy() {
    try {
      this.subs.unsubscribe();
    } catch (err) {}
  }
}
