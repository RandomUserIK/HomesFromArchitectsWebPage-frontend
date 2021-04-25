import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../services/contacts.service';
import {RECAPTCHA_KEY_INJECTABLE} from '../../../../configuration/resources/recaptcha-key-injectable';
import {CONTACT_DATA_FIELDS_CONFIG} from './resources/contact-data-fields-injectable';
import {DataGroupMap} from '../../../../components/data-fields/models/data-group-map';
import {DataField} from '../../../../components/data-fields/models/data-field';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public form: FormGroup;
  public validationSuccess: boolean;
  public uploadMessage: string;
  private submitButtonField: DataField;

  constructor(private contactsService: ContactsService,
              @Inject(CONTACT_DATA_FIELDS_CONFIG) public contactDataFieldsConfig: DataGroupMap,
              @Inject(RECAPTCHA_KEY_INJECTABLE) public recaptchaKey) {
  }

  ngOnInit(): void {
    this.submitButtonField = this.contactDataFieldsConfig.formGroup.find(field => field.formControlName == 'submitButton');
    this.form = new FormGroup({})
  }



  public onSubmit(): void {
    // const form = this.form.value;
    // delete form.dataPrivacyCheck;
    this.submitButtonField.loading = true;
    this.contactsService.sendForm(this.form.value)
      .subscribe(
        () => {
          this.validationSuccess = true;
          this.submitButtonField.loading = false;
          this.form.reset();
        },
        () => {
          this.validationSuccess = false;
          this.uploadMessage = 'Pri odosielaní formulára nastala chyba skúste to znova alebo nás kontaktuje priamo cez telefón alebo email';
          this.submitButtonField.loading = false;
          this.form.patchValue({recaptchaToken: null})
        }
      );
  }

}
