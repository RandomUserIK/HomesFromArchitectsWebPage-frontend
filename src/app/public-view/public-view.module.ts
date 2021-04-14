import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicViewComponent} from './public-view.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomeModule} from './components/home/home.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectsGalleryComponent} from './components/projects-gallery/projects-gallery.component';
import {SearchHeaderModule} from '../components/search-header/search-header.module';
import {ProjectsGalleryModule} from './components/projects-gallery/projects-gallery.module';
import {ContactsComponent} from './components/contacts/contacts.component';

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
      {
        path: 'kontakty',
        component: ContactsComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    PublicViewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ProjectsGalleryModule,
    SearchHeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicViewModule {
}
