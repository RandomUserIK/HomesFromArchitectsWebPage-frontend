import {ProjectData} from './project-data';

export interface PageableProjectsData {
  individualProjects: Array<ProjectData>;
  currentPage: number;
  totalElements: number;
  elementsPerPage: number;
}
