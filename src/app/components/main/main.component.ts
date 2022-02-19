import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
    this.orderService.addCartItem();
  }
}
