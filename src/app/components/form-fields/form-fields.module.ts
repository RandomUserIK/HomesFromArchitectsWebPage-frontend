import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicTextSectionFieldComponent} from './components/dynamic-text-section-field/dynamic-text-section-field.component';
import { DataFieldResolverComponent } from './components/data-field-resolver/data-field-resolver.component';
import { PrimitiveTypeFieldComponent } from './components/primitive-type-field/primitive-type-field.component';
import { EnumerationFieldComponent } from './components/enumeration-field/enumeration-field.component';
import {MultichoiceFieldComponent} from './components/multichoice-field/multichoice-field.component';
import { FileFieldComponent } from './components/file-field/file-field.component';
import {FileUploadValidationService} from './components/services/file-upload-validation.service';
import {FormDynamicGalleryComponent} from './components/form-dynamic-gallery/form-dynamic-gallery.component';



@NgModule({
  declarations: [
    DynamicTextSectionFieldComponent,
    FormDynamicGalleryComponent,
    DataFieldResolverComponent,
    PrimitiveTypeFieldComponent,
    EnumerationFieldComponent,
    MultichoiceFieldComponent,
    FileFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicTextSectionFieldComponent,
    FormDynamicGalleryComponent,
    DataFieldResolverComponent,
  ],
  providers: [
    FileUploadValidationService
  ]
})
export class FormFieldsModule { }
