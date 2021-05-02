import {TextSection} from './text-section.model';

export interface Project {
  id?: number;
  title?: string;
  category?: string
  titleImage?: string;
  builtUpArea?: number;
  usableArea?: number;
  energeticClass?: string;
  persons?: number;
  hasGarage?: boolean;
  textSections?: Array<TextSection>;
  imagePaths?: Array<string>;
}
