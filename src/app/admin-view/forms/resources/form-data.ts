import {Validators} from '@angular/forms';

export interface FormRowData {
  'formControlName': string;
  'label': string;
  'type': string;
  'placeholder': string;
}

export interface FormEnumerationData {
  'formControlName': string;
  'label': string;
  'placeholder': string;
  'values': string[];
}

export interface FormMultichoiceData {
  'formControlName': string;
  'label': string;
  'values': string[];
}

export interface FormFileData {
  'formControlName': string;
  'label': string;
  'imgSrc': string | ArrayBuffer;
  'imageTitle': string;
}
