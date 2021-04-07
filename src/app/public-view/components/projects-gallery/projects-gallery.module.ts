import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectGalleryComponent} from './components/project-gallery/project-gallery.component';
import {EmptySearchResultComponent} from './components/empty-search-result/empty-search-result.component';
import {LoadingComponent} from '../loading/loading.component';
import {ProjectsGalleryComponent} from './projects-gallery.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchHeaderModule} from '../../../components/search-header/search-header.module';
import {ContactModule} from '../contact/contact.module';


@NgModule({
  declarations: [
    ProjectsGalleryComponent,
    LoadingComponent,
    EmptySearchResultComponent,
    ProjectGalleryComponent
  ],
  imports: [
    CommonModule,
    SearchHeaderModule,
    ContactModule,
    NgbPaginationModule
  ],
  exports: [
    ProjectsGalleryComponent,
  ]
})
export class ProjectsGalleryModule { }
