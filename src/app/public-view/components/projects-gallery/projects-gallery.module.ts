import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {LoadingModule} from '../../../components/loading/loading.module';
import {SearchHeaderModule} from '../../../components/search-header/search-header.module';
import {ContactModule} from '../contact/contact.module';
import {ContactsModule} from '../contacts/contacts.module';
import {EmptySearchResultComponent} from './components/empty-search-result/empty-search-result.component';
import {ProjectGalleryComponent} from './components/project-gallery/project-gallery.component';
import {ProjectsGalleryComponent} from './projects-gallery.component';


@NgModule({
  declarations: [
    ProjectsGalleryComponent,
    EmptySearchResultComponent,
    ProjectGalleryComponent
  ],
  imports: [
    CommonModule,
    SearchHeaderModule,
    ContactModule,
    ContactsModule,
    NgbPaginationModule,
    LoadingModule
  ],
  exports: [
    ProjectsGalleryComponent,
  ]
})
export class ProjectsGalleryModule {
}
