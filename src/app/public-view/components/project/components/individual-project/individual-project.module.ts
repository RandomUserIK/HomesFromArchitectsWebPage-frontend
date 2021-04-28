import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProjectModule} from '../general/project.module';
import {IndividualProjectImageGalleryComponent} from './individual-project-image-gallery/individual-project-image-gallery.component';
import {IndividualProjectInfoComponent} from './individual-project-info/individual-project-info.component';
import {IndividualProjectComponent} from './individual-project.component';


@NgModule({
  declarations: [
    IndividualProjectComponent,
    IndividualProjectInfoComponent,
    IndividualProjectImageGalleryComponent
  ],
  imports: [
    CommonModule,
    ProjectModule
  ]
})
export class IndividualProjectModule {
}
