import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCommonProjectComponent} from './create-common-project/create-common-project.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateCommonProjectService} from './services/create-common-project.service';
import {DataFieldsModule} from '../../components/data-fields/data-fields.module';


@NgModule({
  declarations: [
    CreateCommonProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataFieldsModule
  ],
  exports: [
    CreateCommonProjectComponent
  ],
  providers:[
    CreateCommonProjectService
  ]
})
export class AdminFormsModule { }
