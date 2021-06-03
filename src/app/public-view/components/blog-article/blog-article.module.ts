import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoadingModule} from '../../../components/loading/loading.module';
import {NotFoundModule} from '../../../components/not-found/not-found.module';
import {BlogArticleComponent} from './blog-article.component';
import {QuillModule} from 'ngx-quill';


@NgModule({
  declarations: [
    BlogArticleComponent
  ],
  imports: [
    CommonModule,
    NotFoundModule,
    LoadingModule,
    RouterModule,
    QuillModule
  ]
})
export class BlogArticleModule {
}
