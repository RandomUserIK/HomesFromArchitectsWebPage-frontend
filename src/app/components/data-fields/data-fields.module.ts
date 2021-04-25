import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicTextSectionFieldComponent} from './components/dynamic-text-section-field/dynamic-text-section-field.component';
import { DataFieldResolverComponent } from './components/data-field-resolver/data-field-resolver.component';
import { PrimitiveTypeFieldComponent } from './components/primitive-type-field/primitive-type-field.component';
import { EnumerationFieldComponent } from './components/enumeration-field/enumeration-field.component';
import {MultichoiceFieldComponent} from './components/multichoice-field/multichoice-field.component';
import { FileFieldComponent } from './components/file-field/file-field.component';
import {FileUploadValidationService} from './services/file-upload-validation.service';
import {DynamicGalleryFieldComponent} from './components/dynamic-gallery-field/dynamic-gallery-field.component';
import { DataFieldsGroupComponent } from './components/data-fields-group/data-fields-group.component';
import { TextAreaFieldComponent } from './components/text-area-field/text-area-field.component';
import { RecaptchaFieldComponent } from './components/recaptcha-field/recaptcha-field.component';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';



@NgModule({
  declarations: [
    DynamicTextSectionFieldComponent,
    DynamicGalleryFieldComponent,
    DataFieldResolverComponent,
    PrimitiveTypeFieldComponent,
    EnumerationFieldComponent,
    MultichoiceFieldComponent,
    FileFieldComponent,
    DataFieldsGroupComponent,
    TextAreaFieldComponent,
    RecaptchaFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports: [
    DynamicTextSectionFieldComponent,
    DynamicGalleryFieldComponent,
    DataFieldResolverComponent,
    DataFieldsGroupComponent
  ],
  providers: [
    FileUploadValidationService
  ]
})
export class DataFieldsModule { }
