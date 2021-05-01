import {Project} from './project/project.model';

export interface PageableProjectsData {
  individualProjects: Array<Project>;
  currentPage: number;
  totalElements: number;
  elementsPerPage: number;
}
