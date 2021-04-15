import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormMultichoiceComponent} from './components/form-multichoice/form-multichoice.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormRowComponent} from './components/form-control/form-row.component';
import {FormEnumerationComponent} from './components/form-enumeration/form-enumeration.component';
import {FormFileComponent} from './components/form-file/form-file.component';
import {FormDynamicTextSectionComponent} from './components/form-dynamic-text-section/form-dynamic-text-section.component';
import {FormDynamicGalleryComponent} from './components/form-dynamic-gallery/form-dynamic-gallery.component';
import {FormValidationService} from './components/services/form-validation.service';



@NgModule({
  declarations: [
    FormMultichoiceComponent,
    FormRowComponent,
    FormEnumerationComponent,
    FormRowComponent,
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGalleryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormMultichoiceComponent,
    FormRowComponent,
    FormEnumerationComponent,
    FormRowComponent,
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGalleryComponent
  ],
  providers: [
    FormValidationService
  ]
})
export class FormFieldsModule { }
