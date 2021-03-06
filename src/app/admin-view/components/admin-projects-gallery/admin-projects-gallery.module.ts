import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';
import {SearchHeaderModule} from '../../../components/search-header/search-header.module';
import {AdminGalleryLoadingModule} from '../admin-gallery/components/admin-gallery-loading/admin-gallery-loading.module';
import {AdminProjectsGalleryComponent} from './admin-projects-gallery.component';
import {AdminProjectGalleryComponent} from './components/admin-project-gallery/admin-project-gallery.component';


@NgModule({
  declarations: [
    AdminProjectGalleryComponent,
    AdminProjectsGalleryComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    SearchHeaderModule,
    FormAlertModule,
    AdminGalleryLoadingModule
  ],
  exports: [
    AdminProjectsGalleryComponent
  ]
})
export class AdminProjectsGalleryModule {
}
