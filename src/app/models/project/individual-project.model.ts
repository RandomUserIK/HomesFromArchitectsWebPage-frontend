import {Project} from './project.model';

export interface IndividualProject extends Project {
  galleryImagePaths: Array<string>;
}
