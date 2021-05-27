import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateProjectComponent} from './create-project.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DataFieldsModule} from '../../../components/data-fields/data-fields.module';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';
import {CreateProjectFormInitializerService} from './services/create-project-form-initializer.service';
import {CreateProjectService} from './services/create-project.service';


@NgModule({
  declarations: [
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataFieldsModule,
    FormAlertModule
  ],
  exports: [
    CreateProjectComponent
  ],
  providers: [
    CreateProjectFormInitializerService,
    CreateProjectService
  ]
})
export class CreateProjectModule {
}
