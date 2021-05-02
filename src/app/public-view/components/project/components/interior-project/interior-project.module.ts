import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoadingModule} from '../../../../../components/loading/loading.module';
import {ProjectModule} from '../general/project.module';
import {InteriorProjectComponent} from './interior-project.component';
import { InteriorProjectInfoComponent } from './interior-project-info/interior-project-info.component';


@NgModule({
  declarations: [
    InteriorProjectComponent,
    InteriorProjectInfoComponent
  ],
  imports: [
    CommonModule,
    ProjectModule,
    LoadingModule
  ]
})
export class InteriorProjectModule {
}
