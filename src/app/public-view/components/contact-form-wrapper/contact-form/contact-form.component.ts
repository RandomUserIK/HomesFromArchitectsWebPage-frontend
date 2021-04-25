import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../services/contacts.service';
import {RECAPTCHA_KEY_INJECTABLE} from '../../../../configuration/resources/recaptcha-key-injectable';
import {CONTACT_DATA_FIELDS_CONFIG} from '../resources/contact-data-fields-injectable';
import {DataGroupMap} from '../../../../components/data-fields/models/data-group-map';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public form: FormGroup;
  public loading = false;
  public validationSuccess: boolean;
  public uploadMessage: string;

  constructor(private contactsService: ContactsService,
              @Inject(CONTACT_DATA_FIELDS_CONFIG) public contactDataFieldsConfig: DataGroupMap,
              @Inject(RECAPTCHA_KEY_INJECTABLE) public recaptchaKey) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({})
  }

  public onSubmit(): void {
    const form = this.form.value;
    delete form.dataPrivacyCheck;
    this.loading = true;
    this.contactsService.sendForm(form)
      .subscribe(
        () => {
          this.validationSuccess = true;
          this.loading = false;
          this.form.reset();
        },
        () => {
          this.validationSuccess = true;
          this.loading = false;
          this.form.patchValue({recaptchaToken: null})
        }
      );
  }

}
