import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCommonProjectComponent} from './create-common-project/create-common-project.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateCommonProjectService} from './services/create-common-project.service';
import {FormFieldsModule} from '../../components/form-fields/form-fields.module';


@NgModule({
  declarations: [
    CreateCommonProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldsModule
  ],
  exports: [
    CreateCommonProjectComponent
  ],
  providers:[
    CreateCommonProjectService
  ]
})
export class AdminFormsModule { }
