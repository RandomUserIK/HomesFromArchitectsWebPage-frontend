import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectContentComponent} from './project-content.component';
import {ProjectContentTableComponent} from './components/table/project-content-table.component';
import {ContentTextSectionComponent} from './components/content-text-section/content-text-section.component';
import {ExtendedContentHeaderComponent} from './components/extended-content-header/extended-content-header.component';
import {ExtendedContentComponent} from './components/extended-content/extended-content.component';
import {ContactModule} from '../contact/contact.module';
import {ContentIndividualProjectPhotosComponent} from './components/content-individual-project-photos/content-individual-project-photos.component';
import {AnimateModule} from '../../../animate/animate.module';


@NgModule({
  declarations: [
    ProjectContentComponent,
    ProjectContentTableComponent,
    ContentTextSectionComponent,
    ExtendedContentHeaderComponent,
    ContentIndividualProjectPhotosComponent,
    ExtendedContentComponent,
    ContentIndividualProjectPhotosComponent
  ],
  imports: [
    CommonModule,
    ContactModule,
    AnimateModule
  ],
  exports: [
    ProjectContentComponent,
  ]

})
export class ProjectContentModule {
}
