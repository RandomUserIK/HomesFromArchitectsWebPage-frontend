import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {LoadingModule} from '../../../components/loading/loading.module';
import {ContactModule} from '../contact/contact.module';
import {EmptySearchResultModule} from '../empty-search-result/empty-search-result.module';
import {BlogGalleryComponent} from './blog-gallery.component';
import {BlogGalleryArticleComponent} from './components/blog-gallery-article/blog-gallery-article.component';
import {BlogGalleryFooterComponent} from './components/blog-gallery-footer/blog-gallery-footer.component';


@NgModule({
  declarations: [
    BlogGalleryComponent,
    BlogGalleryFooterComponent,
    BlogGalleryArticleComponent
  ],
  imports: [
    CommonModule,
    ContactModule,
    LoadingModule,
    NgbPaginationModule,
    EmptySearchResultModule
  ]
})
export class BlogGalleryModule {
}
