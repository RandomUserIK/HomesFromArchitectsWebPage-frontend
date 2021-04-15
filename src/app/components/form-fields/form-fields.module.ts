import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormMultichoiceComponent} from './components/form-multichoice/form-multichoice.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormRowComponent} from './components/form-row/form-row.component';
import {FormEnumerationComponent} from './components/form-enumeration/form-enumeration.component';
import {FormFileComponent} from './components/form-file/form-file.component';
import {FormDynamicTextSectionComponent} from './components/form-dynamic-text-section/form-dynamic-text-section.component';
import {FormDynamicGalleryComponent} from './components/form-dynamic-gallery/form-dynamic-gallery.component';
import {FormValidationService} from './components/services/form-validation.service';
import { DataFieldResolverComponent } from './components/data-field-resolver/data-field-resolver.component';
import { TextFieldComponent } from './components/text-field/text-field.component';



@NgModule({
  declarations: [
    FormMultichoiceComponent,
    FormRowComponent,
    FormEnumerationComponent,
    FormRowComponent,
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGalleryComponent,
    DataFieldResolverComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormMultichoiceComponent,
    FormRowComponent,
    FormEnumerationComponent,
    FormRowComponent,
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGalleryComponent,
    DataFieldResolverComponent
  ],
  providers: [
    FormValidationService
  ]
})
export class FormFieldsModule { }
