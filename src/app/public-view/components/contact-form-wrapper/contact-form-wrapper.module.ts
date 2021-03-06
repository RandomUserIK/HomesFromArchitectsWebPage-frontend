import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactFormWrapperComponent} from './contact-form-wrapper.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {ContactsService} from './services/contacts.service';
import {DataFieldsModule} from '../../../components/data-fields/data-fields.module';
import {FormAlertModule} from '../../../components/form-alert/form-alert.module';
import {BillingInformationComponent} from './billing-information/billing-information.component';
import {AnimateModule} from '../../../animate/animate.module';



@NgModule({
  declarations: [
    ContactFormWrapperComponent,
    ContactFormComponent,
    BillingInformationComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        DataFieldsModule,
        FormAlertModule,
        AnimateModule
    ],
  providers: [
    ContactsService
  ],
  exports: [
    ContactFormWrapperComponent
  ]
})
export class ContactFormWrapperModule { }
