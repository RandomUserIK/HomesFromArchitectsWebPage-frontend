import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './order.component';
import {OrderFormComponent} from './components/order-form/order-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import {DataFieldsModule} from '../../../components/data-fields/data-fields.module';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';



@NgModule({
  declarations: [
    OrderComponent,
    OrderFormComponent,
    OrderHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataFieldsModule,
    FormAlertModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
