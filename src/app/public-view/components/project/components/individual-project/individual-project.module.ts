import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoadingModule} from '../../../../../components/loading/loading.module';
import {ProjectModule} from '../general/project.module';
import {IndividualProjectImageGalleryComponent} from './individual-project-image-gallery/individual-project-image-gallery.component';
import {IndividualProjectInfoComponent} from './individual-project-info/individual-project-info.component';
import {IndividualProjectComponent} from './individual-project.component';
import { IndividualProjectCustomerRequestComponent } from './individual-project-customer-request/individual-project-customer-request.component';


@NgModule({
  declarations: [
    IndividualProjectComponent,
    IndividualProjectInfoComponent,
    IndividualProjectImageGalleryComponent,
    IndividualProjectCustomerRequestComponent
  ],
  imports: [
    CommonModule,
    ProjectModule,
    LoadingModule
  ]
})
export class IndividualProjectModule {
}
