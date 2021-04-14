import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCommonProjectComponent} from './create-common-project/create-common-project.component';
import {FormEnumerationComponent} from '../../components/form-fields/components/form-enumeration/form-enumeration.component';
import {FormFileComponent} from '../../components/form-fields/components/form-file/form-file.component';
import {FormDynamicTextSectionComponent} from '../../components/form-fields/components/form-dynamic-text-section/form-dynamic-text-section.component';
import {FormDynamicGalleryComponent} from '../../components/form-fields/components/form-dynamic-gallery/form-dynamic-gallery.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormValidationService} from '../../components/form-fields/components/services/form-validation.service';
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
