import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  orderForm: FormGroup;
  successSubmit: boolean;
  invalidsSubmit: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'projectType': new FormControl(null, Validators.required)
    })
  }

  onSubmit(): void {

  }
}
