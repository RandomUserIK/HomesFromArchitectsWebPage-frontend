import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProjectModule} from '../general/project.module';
import {InteriorProjectComponent} from './interior-project.component';


@NgModule({
  declarations: [
    InteriorProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectModule
  ]
})
export class InteriorProjectModule {
}
