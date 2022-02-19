import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.orderService.addCartItem();
  }

}
