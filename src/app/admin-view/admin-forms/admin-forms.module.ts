import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateCommonProjectService} from './services/create-common-project.service';
import {DataFieldsModule} from '../../components/data-fields/data-fields.module';
import {FormAlertModule} from '../../components/form-alert/form-alert.module';


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
  providers:[
    CreateCommonProjectService
  ]
})
export class AdminFormsModule { }
