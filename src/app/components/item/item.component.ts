import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() notesData: any[];
  @Input() notesTemplate: TemplateRef<any>[];
  @Input() title: string[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.notesTemplate);
  }

}
