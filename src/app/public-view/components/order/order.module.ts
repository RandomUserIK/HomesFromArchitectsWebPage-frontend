import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './order.component';
import {OrderFormComponent} from './components/order-form/order-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import { MultichoiceFieldComponent } from './components/multichoice-field/multichoice-field.component';



@NgModule({
  declarations: [
    OrderComponent,
    OrderFormComponent,
    OrderHeaderComponent,
    MultichoiceFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
