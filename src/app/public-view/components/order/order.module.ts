import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './order.component';
import {OrderFormComponent} from './components/order-form/order-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import {FormFieldsModule} from '../../../components/form-fields/form-fields.module';



@NgModule({
  declarations: [
    OrderComponent,
    OrderFormComponent,
    OrderHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldsModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
