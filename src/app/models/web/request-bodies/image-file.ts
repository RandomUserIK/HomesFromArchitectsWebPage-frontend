import {ImageType} from '../../../components/data-fields/models/image-type.enum';

export interface ImageFile {
  type: ImageType;
  value: File;
}
