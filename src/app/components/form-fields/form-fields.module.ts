import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormMultichoiceComponent} from './components/form-multichoice/form-multichoice.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FormMultichoiceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormMultichoiceComponent
  ]
})
export class FormFieldsModule { }
