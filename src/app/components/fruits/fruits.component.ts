import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent implements OnInit {
  fruits = [
    {
      name: 'A',
      desc: 'Car Text Notes',
    },
    {
      name: 'B',
      desc: 'Sports Text Notes',
    },
    {
      name: 'C',
      desc: 'Cooking Text Notes',
    },
    {
      name: 'D',
      desc: 'Shopping Text Notes',
    },
  ];

  title = ['name', 'desc'];

  @ViewChild('name', {static:true}) name:TemplateRef<any>;
  @ViewChild('desc', {static:true}) desc:TemplateRef<any>;

  template: TemplateRef<any>[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.template.push(this.name,this.desc);
  }

  onClick() {
    this.orderService.addCartItem();
  }
}
