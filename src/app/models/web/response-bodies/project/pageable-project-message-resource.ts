import {Project} from '../../../project/project.model';

export interface PageableProjectMessageResource {
  individualProjects: Array<Project>;
  currentPage: number;
  totalElements: number;
  elementsPerPage: number;
}
