import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchHeaderComponent} from './search-header.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SearchHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchHeaderComponent
  ]
})
export class SearchHeaderModule {
}
