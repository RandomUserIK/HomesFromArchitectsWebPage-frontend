import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {DataFieldsModule} from '../../../components/data-fields/data-fields.module';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';
import {AdminBlogComponent} from './admin-blog.component';
import {CreateBlogArticleService} from './services/create-blog-article.service';


@NgModule({
  declarations: [
    AdminBlogComponent
  ],
  imports: [
    CommonModule,
    QuillModule,
    FormAlertModule,
    FormsModule,
    ReactiveFormsModule,
    DataFieldsModule
  ],
  providers: [
    CreateBlogArticleService
  ]
})
export class AdminBlogModule {
}
