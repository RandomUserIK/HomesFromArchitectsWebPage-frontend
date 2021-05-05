import {Project} from '../../../project/project.model';

export interface PageableProjectMessageResource {
  projects: Array<Project>;
  currentPage: number;
  totalElements: number;
  elementsPerPage: number;
}
