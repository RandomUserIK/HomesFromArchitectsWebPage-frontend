import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoadingModule} from '../../../../../components/loading/loading.module';
import {NotFoundModule} from '../../../../../components/not-found/not-found.module';
import {ProjectModule} from '../general/project.module';
import {InteriorProjectInfoComponent} from './interior-project-info/interior-project-info.component';
import {InteriorProjectComponent} from './interior-project.component';


@NgModule({
  declarations: [
    InteriorProjectComponent,
    InteriorProjectInfoComponent
  ],
  imports: [
    CommonModule,
    ProjectModule,
    LoadingModule,
    NotFoundModule
  ]
})
export class InteriorProjectModule {
}
