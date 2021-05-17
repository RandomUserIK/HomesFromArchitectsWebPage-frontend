import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';
import {BlogComponent} from './blog.component';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    QuillModule,
    FormsModule,
    FormAlertModule,
    ReactiveFormsModule
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule {
}
