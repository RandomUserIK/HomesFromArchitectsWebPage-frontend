import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchHeaderModule} from '../components/search-header/search-header.module';
import {BlogArticleComponent} from './components/blog-article/blog-article.component';
import {BlogArticleModule} from './components/blog-article/blog-article.module';
import {BlogGalleryComponent} from './components/blog-gallery/blog-gallery.component';
import {BlogGalleryModule} from './components/blog-gallery/blog-gallery.module';
import {ContactFormWrapperComponent} from './components/contact-form-wrapper/contact-form-wrapper.component';
import {ProjectContentComponent} from './components/content/project-content.component';
import {ProjectContentModule} from './components/content/project-content.module';
import {FooterComponent} from './components/footer/footer.component';
import {GdprComponent} from './components/gdpr/gdpr/gdpr.component';
import {GdprModule} from './components/gdpr/gdpr/gdpr.module';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {HomeModule} from './components/home/home.module';
import {OrderComponent} from './components/order/order.component';
import {OrderModule} from './components/order/order.module';
import {CommonProjectComponent} from './components/project/components/common-project/common-project.component';
import {CommonProjectModule} from './components/project/components/common-project/common-project.module';
import {IndividualInteriorProjectComponent} from './components/project/components/individual-interior-project/individual-interior-project.component';
import {IndividualInteriorProjectModule} from './components/project/components/individual-interior-project/individual-interior-project.module';
import {ProjectsGalleryComponent} from './components/projects-gallery/projects-gallery.component';
import {ProjectsGalleryModule} from './components/projects-gallery/projects-gallery.module';
import {PublicViewComponent} from './public-view.component';

const routes: Routes = [
  {
    path: '', component: PublicViewComponent, children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'individualne-projekty',
        component: ProjectsGalleryComponent,
        data: {projectsTitle: 'Individuálne projekty', projectsCategoryId: 'INDIVIDUAL'}
      },
      {
        path: 'katalogove-projekty',
        component: ProjectsGalleryComponent,
        data: {projectsTitle: 'Katalógové projekty', projectsCategoryId: 'COMMON'}
      },
      {
        path: 'interierovy-dizajn',
        component: ProjectsGalleryComponent,
        data: {projectsTitle: 'Interiérový dizajn', projectsCategoryId: 'INTERIOR_DESIGN'}
      },
      {
        path: 'individualne-projekty/:id',
        component: IndividualInteriorProjectComponent
      },
      {
        path: 'katalogove-projekty/:id',
        component: CommonProjectComponent
      },
      {
        path: 'interierovy-dizajn/:id',
        component: IndividualInteriorProjectComponent
      },
      {
        path: 'obsah-projektu',
        component: ProjectContentComponent
      },
      {
        path: 'kontakty',
        component: ContactFormWrapperComponent
      },
      {
        path: 'objednavka/:id',
        component: OrderComponent
      },
      {
        path: 'blog',
        component: BlogGalleryComponent
      },
      {
        path: 'blog/:id',
        component: BlogArticleComponent
      },
      {
        path: 'gdpr',
        component: GdprComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    PublicViewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    ProjectContentModule,
    CommonModule,
    HomeModule,
    CommonProjectModule,
    IndividualInteriorProjectModule,
    ProjectsGalleryModule,
    GdprModule,
    SearchHeaderModule,
    OrderModule,
    RouterModule.forChild(routes),
    BlogArticleModule,
    BlogGalleryModule
  ]
})
export class PublicViewModule {
}
