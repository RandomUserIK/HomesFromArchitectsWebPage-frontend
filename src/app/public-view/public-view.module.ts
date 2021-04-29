import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicViewComponent} from './public-view.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {HomeModule} from './components/home/home.module';
import {ProjectComponent} from './components/project/project.component';
import {ProjectModule} from './components/project/project.module';
import {ProjectsGalleryComponent} from './components/projects-gallery/projects-gallery.component';
import {SearchHeaderModule} from '../components/search-header/search-header.module';
import {ProjectsGalleryModule} from './components/projects-gallery/projects-gallery.module';
import {ContactFormWrapperComponent} from './components/contact-form-wrapper/contact-form-wrapper.component';
import {OrderComponent} from './components/order/order.component';
import {OrderModule} from './components/order/order.module';
import {ProjectContentModule} from './components/content/project-content.module';
import {ProjectContentComponent} from './components/content/project-content.component';

const routes: Routes = [
  {
    path: '', component: PublicViewComponent, children: [
      {
        path: '',
        component: HomeComponent},
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
      // {
      // path: 'projekty',
      // component: ProjectsComponent
      // },
      {
        path: 'projekty/:id',
        component: ProjectComponent
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
        path: 'order',
        component: OrderComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    PublicViewComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    ProjectContentModule,
    CommonModule,
    HomeModule,
    ProjectModule,
    ProjectsGalleryModule,
    SearchHeaderModule,
    OrderModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicViewModule {
}
