import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminProjectGalleryComponent} from './components/admin-project-gallery/admin-project-gallery.component';
import {AdminProjectsGalleryComponent} from './admin-projects-gallery.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchHeaderModule} from '../../../components/search-header/search-header.module';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';



@NgModule({
  declarations: [
    AdminProjectGalleryComponent,
    AdminProjectsGalleryComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    SearchHeaderModule,
    FormAlertModule
  ],
  exports: [
    AdminProjectsGalleryComponent
  ]
})
export class AdminProjectsGalleryModule { }
