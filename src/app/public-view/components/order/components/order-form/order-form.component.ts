import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormField} from '../../../../../components/form-fields/models/form-data';
import formData from './resources/order-form-data.json';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  public orderForm: FormGroup;
  public validationSuccess = false;
  public uploadMessage = '';
  public submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({});
  }

  onSubmit(): void {
    console.log(this.orderForm);
  }

  public formInitialized(name: string, form: FormGroup): void {
    this.orderForm.setControl(name, form);
  }

  public getFormData(id: string): FormField[] {
    return formData[id];
  }

}
