import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCommonProjectComponent} from './create-common-project/create-common-project.component';
import {FormEnumerationComponent} from './components/form-enumeration/form-enumeration.component';
import {FormRowComponent} from './components/form-row/form-row.component';
import {FormMultichoiceComponent} from './components/form-multichoice/form-multichoice.component';
import {FormFileComponent} from './components/form-file/form-file.component';
import {FormDynamicTextSectionComponent} from './components/form-dynamic-text-section/form-dynamic-text-section.component';
import {FormDynamicGaleryComponent} from './components/form-dynamic-galery/form-dynamic-galery.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProjectService} from '../projects/services/project-service';
import {FormValidationService} from './components/services/form-validation.service';


@NgModule({
  declarations: [
    CreateCommonProjectComponent,
    FormEnumerationComponent,
    FormRowComponent,
    FormMultichoiceComponent,
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGaleryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateCommonProjectComponent
  ],
  providers:[
    ProjectService,
    FormValidationService
  ]
})
export class AdminFormModule { }
