import {CommonProject} from './common-project.model';

export interface IndividualProject extends CommonProject {
  galleryImagePaths: Array<string>;
}
