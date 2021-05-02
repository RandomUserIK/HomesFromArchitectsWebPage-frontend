import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoadingModule} from '../../../../../components/loading/loading.module';
import {NotFoundModule} from '../../../../../components/not-found/not-found.module';
import {ProjectModule} from '../general/project.module';
import {IndividualProjectInfoComponent} from './individual-project-info/individual-project-info.component';
import {IndividualProjectComponent} from './individual-project.component';


@NgModule({
  declarations: [
    IndividualProjectComponent,
    IndividualProjectInfoComponent
  ],
  imports: [
    CommonModule,
    ProjectModule,
    LoadingModule,
    NotFoundModule
  ]
})
export class IndividualProjectModule {
}
