import {TextSection} from './text-section.model';
import {ImageModel} from './image-model';

export interface Project {
  id?: number;
  title?: string;
  category?: string
  titleImage?: ImageModel;
  builtUpArea?: number;
  usableArea?: number;
  energeticClass?: string;
  persons?: number;
  hasGarage?: boolean;
  textSections?: Array<TextSection>;
  galleryImages?: Array<ImageModel>;
}
