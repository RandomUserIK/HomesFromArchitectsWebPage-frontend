import {DataFieldType} from './data-field-type.enum';
import {ImageType} from './image-type.enum';

export interface DataField {
  formControlName: string;
  label: string;
  type: DataFieldType;
  fullWidth: boolean;
  placeholder?: string;
  imgSrc?: string | ArrayBuffer;
  imgType?: ImageType;
  imageTitle?: string;
  values?: Array<string>;
}
