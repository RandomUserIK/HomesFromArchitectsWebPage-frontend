import {DataFieldType} from './data-field-type.enum';
import {ImageType} from './image-type.enum';
import {ValidatorFn} from '@angular/forms';

export interface DataField {
  formControlName: string;
  label: string;
  type: DataFieldType;
  validator?: ValidatorFn | ValidatorFn[],
  fullWidth: boolean;
  placeholder?: string;
  imgSrc?: string | ArrayBuffer;
  imgType?: ImageType;
  imageTitle?: string;
  values?: Array<string>;
}


