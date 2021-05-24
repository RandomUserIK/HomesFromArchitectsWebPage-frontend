import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';
import {AdminBlogComponent} from './admin-blog.component';


@NgModule({
  declarations: [
    AdminBlogComponent
  ],
  imports: [
    CommonModule,
    QuillModule,
    FormAlertModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminBlogModule {
}
