import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {DataFieldsModule} from '../../../components/data-fields/data-fields.module';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';
import {AdminBlogComponent} from './admin-blog.component';
import {CreateBlogArticleFormInitializerService} from './services/create-blog-article-form-initializer.service';
import {BlogArticleService} from './services/blog-article.service';


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
    BlogArticleService,
    CreateBlogArticleFormInitializerService
  ]
})
export class AdminBlogModule {
}
