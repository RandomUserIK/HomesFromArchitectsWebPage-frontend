import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GdprComponent} from './gdpr.component';
import {GdprTextSectionComponent} from '../components/gdpr-text-section/gdpr-text-section.component';


@NgModule({
  declarations: [
    GdprComponent,
    GdprTextSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GdprModule {
}
