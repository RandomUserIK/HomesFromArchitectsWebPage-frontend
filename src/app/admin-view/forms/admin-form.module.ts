import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCommonProjectComponent} from './create-common-project/create-common-project.component';
import {FormEnumerationComponent} from './components/form-enumeration/form-enumeration.component';
import {FormRowComponent} from './components/form-row/form-row.component';
import {FormMultichoiceComponent} from '../../components/form-fields/components/form-multichoice/form-multichoice.component';
import {FormFileComponent} from './components/form-file/form-file.component';
import {FormDynamicTextSectionComponent} from './components/form-dynamic-text-section/form-dynamic-text-section.component';
import {FormDynamicGaleryComponent} from './components/form-dynamic-galery/form-dynamic-galery.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormValidationService} from './components/services/form-validation.service';
import {CreateCommonProjectService} from './services/create-common-project.service';
import {FormFieldsModule} from '../../components/form-fields/form-fields.module';


@NgModule({
  declarations: [
    CreateCommonProjectComponent,
    FormEnumerationComponent,
    FormRowComponent,
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGaleryComponent
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
    CreateCommonProjectService,
    FormValidationService
  ]
})
export class AdminFormModule { }
