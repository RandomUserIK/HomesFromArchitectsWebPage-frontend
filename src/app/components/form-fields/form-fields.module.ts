import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormFileComponent} from './components/form-file/form-file.component';
import {FormDynamicTextSectionComponent} from './components/form-dynamic-text-section/form-dynamic-text-section.component';
import {FormDynamicGalleryComponent} from './components/form-dynamic-gallery/form-dynamic-gallery.component';
import {FormValidationService} from './components/services/form-validation.service';
import { DataFieldResolverComponent } from './components/data-field-resolver/data-field-resolver.component';
import { PrimitiveTypeFieldComponent } from './components/primitive-type-field/primitive-type-field.component';
import { EnumerationFieldComponent } from './components/enumeration-field/enumeration-field.component';
import {MultichoiceFieldComponent} from './components/multichoice-field/multichoice-field.component';



@NgModule({
  declarations: [
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGalleryComponent,
    DataFieldResolverComponent,
    PrimitiveTypeFieldComponent,
    EnumerationFieldComponent,
    MultichoiceFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormFileComponent,
    FormDynamicTextSectionComponent,
    FormDynamicGalleryComponent,
    DataFieldResolverComponent,
  ],
  providers: [
    FormValidationService
  ]
})
export class FormFieldsModule { }
