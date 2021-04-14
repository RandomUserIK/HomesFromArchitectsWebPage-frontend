import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCommonProjectComponent} from './create-common-project/create-common-project.component';
import {FormEnumerationComponent} from './components/form-enumeration/form-enumeration.component';
import {FormRowComponent} from './components/form-row/form-row.component';
import {FormFileComponent} from './components/form-file/form-file.component';
import {FormDynamicTextSectionComponent} from './components/form-dynamic-text-section/form-dynamic-text-section.component';
import {FormDynamicGalleryComponent} from './components/form-dynamic-gallery/form-dynamic-gallery.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormValidationService} from './components/services/form-validation.service';
import {CreateCommonProjectService} from './services/create-common-project.service';
import {FormFieldsModule} from '../../components/form-fields/form-fields.module';
import {FormAlertModule} from '../../components/form-alert/form-alert.module';


@NgModule({
  declarations: [
    CreateCommonProjectComponent,
    FormEnumerationComponent,
    FormRowComponent,
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGalleryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldsModule,
    FormAlertModule
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
