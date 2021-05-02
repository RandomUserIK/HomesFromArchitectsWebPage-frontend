import {InjectionToken} from '@angular/core';
import {Validators} from '@angular/forms';
import {DataGroupMap} from '../../../../../components/data-fields/models/data-group-map';
import {DataFieldType} from '../../../../../components/data-fields/models/data-field-type.enum';


export const CONTACT_DATA_FIELDS_CONFIG = new InjectionToken<DataGroupMap>(
  'Common project data fields',
  {
    factory: () => {
      return CONTACT_DATA_FIELDS;
    }
  }
);


export const CONTACT_DATA_FIELDS: DataGroupMap = {
  formGroup: [
    {
      formControlName: 'name',
      type: DataFieldType.TEXT,
      validator: Validators.required,
      label: 'Meno *',
      fullWidth: false,
      placeholder: 'Jozef'
    },
    {
      formControlName: 'surname',
      type: DataFieldType.TEXT,
      validator: Validators.required,
      label: 'Priezvisko *',
      fullWidth: false,
      placeholder: 'Mrkvička'
    },
    {
      formControlName: 'email',
      type: DataFieldType.TEXT,
      validator: [Validators.required, Validators.email],
      label: 'Email *',
      fullWidth: false,
      placeholder: 'jozef@gmail.com'
    },
    {
      formControlName: 'telephone',
      label: 'Telefón *',
      type: DataFieldType.TEXT,
      validator: [
        Validators.required,
        Validators.pattern('^[+]([0-9]){3}( )?([0-9]){3}( )?([0-9]){3}( )?([0-9]){3}$')
      ],
      fullWidth: false,
      placeholder: '+421 xxx xxx xxx'
    },
    {
      formControlName: 'text',
      type: DataFieldType.TEXT_AREA,
      validator: [Validators.required],
      label: null,
      fullWidth: true,
      placeholder: 'Napíšte nám správu *'
    },
    {
      formControlName: 'dataPrivacyCheck',
      type: DataFieldType.MULTICHOICE,
      validator: Validators.required,
      label: null,
      fullWidth: false,
      placeholder: 'Vyberte energetickú triedu projektu',
      values: [
        'Súhlasím so spracovaním osobných údajov *'
      ]
    },
    {
      formControlName: 'recaptchaToken',
      type: DataFieldType.RECAPTCHA,
      validator: Validators.required,
      label: null,
      fullWidth: true,
      placeholder: null,
    },
    {
      formControlName: 'submitButton',
      type: DataFieldType.SUBMIT_BUTTON,
      label: 'Odoslať nezáväzne',
      fullWidth: true,
      placeholder: null,
    },
  ]
}
