import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlogArticleComponent} from './blog-article.component';
import {QuillModule} from 'ngx-quill';


@NgModule({
  declarations: [
    BlogArticleComponent
  ],
    imports: [
        CommonModule,
        QuillModule
    ]
})
export class BlogArticleModule {
}
