import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {NgxImageCompressService} from 'ngx-image-compress';
import {QuillModule} from 'ngx-quill';
import {DataFieldResolverComponent} from './components/data-field-resolver/data-field-resolver.component';
import {DataFieldsGroupComponent} from './components/data-fields-group/data-fields-group.component';
import {DynamicGalleryFieldComponent} from './components/dynamic-gallery-field/dynamic-gallery-field.component';
import {DynamicTextSectionFieldComponent} from './components/dynamic-text-section-field/dynamic-text-section-field.component';
import {EnumerationFieldComponent} from './components/enumeration-field/enumeration-field.component';
import {ImageFieldComponent} from './components/image-field/image-field.component';
import {MultichoiceFieldComponent} from './components/multichoice-field/multichoice-field.component';
import {PrimitiveTypeFieldComponent} from './components/primitive-type-field/primitive-type-field.component';
import {RecaptchaFieldComponent} from './components/recaptcha-field/recaptcha-field.component';
import {SubmitButtonFieldComponent} from './components/submit-button-field/submit-button-field.component';
import {TextAreaFieldComponent} from './components/text-area-field/text-area-field.component';
import {TextEditorFieldComponent} from './components/text-editor-field/text-editor-field.component';
import {FileUploadValidationService} from './services/file-upload-validation.service';
import {ImageCompressionService} from './services/image-compression.service';


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
    SubmitButtonFieldComponent,
    TextEditorFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    QuillModule
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
export class DataFieldsModule {
}
