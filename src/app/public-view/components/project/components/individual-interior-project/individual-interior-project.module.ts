import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoadingModule} from '../../../../../components/loading/loading.module';
import {NotFoundModule} from '../../../../../components/not-found/not-found.module';
import {ProjectModule} from '../general/project.module';
import {IndividualInteriorProjectComponent} from './individual-interior-project.component';
import {IndividualProjectInfoComponent} from './individual-project/individual-project-info/individual-project-info.component';
import {InteriorProjectInfoComponent} from './interior-project/interior-project-info/interior-project-info.component';


@NgModule({
  declarations: [
    InteriorProjectInfoComponent,
    IndividualProjectInfoComponent,
    IndividualInteriorProjectComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    ProjectModule,
    LoadingModule,
    NotFoundModule
  ]
})
export class IndividualInteriorProjectModule {
}
