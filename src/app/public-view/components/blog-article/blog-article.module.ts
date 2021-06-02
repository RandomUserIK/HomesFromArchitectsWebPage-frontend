import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoadingModule} from '../../../components/loading/loading.module';
import {NotFoundModule} from '../../../components/not-found/not-found.module';
import {BlogArticleComponent} from './blog-article.component';


@NgModule({
  declarations: [
    BlogArticleComponent
  ],
  imports: [
    CommonModule,
    NotFoundModule,
    LoadingModule,
    RouterModule
  ]
})
export class BlogArticleModule {
}
