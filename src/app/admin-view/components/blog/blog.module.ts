import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {QuillModule} from 'ngx-quill';
import {BlogComponent} from './blog.component';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    QuillModule
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule {
}
