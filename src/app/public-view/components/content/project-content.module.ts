import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectContentComponent} from './project-content.component';
import {ProjectContentTableComponent} from './components/table/project-content-table.component';
import {ContentTextSectionComponent} from './components/content-text-section/content-text-section.component';
import { ExtendedContentHeaderComponent } from './components/extended-content-header/extended-content-header.component';
import { ExtendedContentComponent } from './components/extended-content/extended-content.component';


@NgModule({
  declarations: [
    ProjectContentComponent,
    ProjectContentTableComponent,
    ContentTextSectionComponent,
    ExtendedContentHeaderComponent,
    ExtendedContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectContentComponent,
  ]

})
export class ProjectContentModule { }
