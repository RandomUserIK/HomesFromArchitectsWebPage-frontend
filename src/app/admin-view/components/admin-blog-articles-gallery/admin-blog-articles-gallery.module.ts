import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';
import {AdminGalleryLoadingModule} from '../admin-gallery/components/admin-gallery-loading/admin-gallery-loading.module';
import {AdminBlogArticlesGalleryComponent} from './admin-blog-articles-gallery.component';
import {AdminBlogArticleComponent} from './components/admin-blog-article/admin-blog-article.component';


@NgModule({
  declarations: [
    AdminBlogArticleComponent,
    AdminBlogArticlesGalleryComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormAlertModule,
    AdminGalleryLoadingModule
  ],
  exports: [
    AdminBlogArticlesGalleryComponent
  ]
})
export class AdminBlogArticlesGalleryModule {
}
