import {ImageType} from '../../../components/data-fields/models/image-type.enum';

export interface PhotoFile {
  type: ImageType;
  value: File;
}
