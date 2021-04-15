import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectContentComponent } from './project-content.component';
import {ProjectContentTitleSectionComponent} from './components/project-content-title-section/project-content-title-section.component';
import { ProjectContentTableComponent } from './components/project-content-table/project-content-table.component';



@NgModule({
  declarations: [
    ProjectContentComponent,
    ProjectContentTitleSectionComponent,
    ProjectContentTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectContentComponent,
    ProjectContentTitleSectionComponent
  ]

})
export class ProjectContentModule { }
