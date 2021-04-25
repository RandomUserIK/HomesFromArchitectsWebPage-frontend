import {Project} from './project.model';
import {TextSection} from './text-section.model';

export interface CommonProject extends Project {
  builtUpArea?: number;
  usableArea?: number;
  energeticClass?: string;
  persons?: number;
  textSections?: Array<TextSection>;
}
