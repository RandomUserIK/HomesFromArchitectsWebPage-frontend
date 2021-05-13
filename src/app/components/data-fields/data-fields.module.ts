import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicTextSectionFieldComponent} from './components/dynamic-text-section-field/dynamic-text-section-field.component';
import { DataFieldResolverComponent } from './components/data-field-resolver/data-field-resolver.component';
import { PrimitiveTypeFieldComponent } from './components/primitive-type-field/primitive-type-field.component';
import { EnumerationFieldComponent } from './components/enumeration-field/enumeration-field.component';
import {MultichoiceFieldComponent} from './components/multichoice-field/multichoice-field.component';
import { ImageFieldComponent } from './components/image-field/image-field.component';
import {FileUploadValidationService} from './services/file-upload-validation.service';
import {DynamicGalleryFieldComponent} from './components/dynamic-gallery-field/dynamic-gallery-field.component';
import {NgxImageCompressService} from 'ngx-image-compress';
import {ImageCompressionService} from './services/image-compression.service';
import { DataFieldsGroupComponent } from './components/data-fields-group/data-fields-group.component';
import { TextAreaFieldComponent } from './components/text-area-field/text-area-field.component';
import { RecaptchaFieldComponent } from './components/recaptcha-field/recaptcha-field.component';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {SubmitButtonFieldComponent} from './components/submit-button-field/submit-button-field.component';



@NgModule({
  declarations: [
    DynamicTextSectionFieldComponent,
    DynamicGalleryFieldComponent,
    DataFieldResolverComponent,
    PrimitiveTypeFieldComponent,
    EnumerationFieldComponent,
    MultichoiceFieldComponent,
    ImageFieldComponent,
    DataFieldsGroupComponent,
    TextAreaFieldComponent,
    RecaptchaFieldComponent,
    SubmitButtonFieldComponent
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
    DataFieldsGroupComponent,
    SubmitButtonFieldComponent
  ],
  providers: [
    FileUploadValidationService,
    NgxImageCompressService,
    ImageCompressionService
  ]
})
export class DataFieldsModule { }
