import {DataFieldType} from './data-field-type.enum';
import {ImageType} from './image-type.enum';
import {ValidatorFn} from '@angular/forms';
import {SafeUrl} from '@angular/platform-browser';

export interface DataField {
  formControlName: string;
  label: string;
  type: DataFieldType;
  validator?: ValidatorFn | ValidatorFn[],
  fullWidth: boolean;
  placeholder?: string;
  imgSrc?: string | ArrayBuffer | SafeUrl;
  imgType?: ImageType;
  imageTitle?: string;
  values?: Array<string>;
  loading?: boolean;
}


