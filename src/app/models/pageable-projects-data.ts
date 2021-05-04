import {Project} from './project/project.model';

export interface PageableProjectsData {
  projects: Array<Project>;
  currentPage: number;
  totalElements: number;
  elementsPerPage: number;
}
