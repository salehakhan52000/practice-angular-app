import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Output() formValues = new EventEmitter();
  @ViewChild ('firstName', {static: true}) firstName;

  checkoutForm = new FormGroup ({
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
    this.firstName.nativeElement.focus();
  }

  onSubmit(firstName) {
    console.log(firstName.value);
    this.formValues.emit();
  }

}
