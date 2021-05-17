import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {LoadingModule} from '../../../components/loading/loading.module';
import {SearchHeaderModule} from '../../../components/search-header/search-header.module';
import {ContactModule} from '../contact/contact.module';
import {ContactFormWrapperModule} from '../contact-form-wrapper/contact-form-wrapper.module';
import {IndividualInteriorProjectModule} from '../project/components/individual-interior-project/individual-interior-project.module';
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
    NgbPaginationModule,
    LoadingModule,
    ContactFormWrapperModule,
    IndividualInteriorProjectModule
  ],
  exports: [
    ProjectsGalleryComponent,
  ]
})
export class ProjectsGalleryModule {
}
