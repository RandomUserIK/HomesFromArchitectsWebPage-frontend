import {Project} from './project.model';

export interface CommonProject extends Project {
  rooms?: number;
  totalLivingArea?: number;
  roofPitch?: number;
  minimumParcelWidth?: number;
  selfHelpBuildPrice?: number;
  onKeyPrice?: number;
  basicProjectPrice?: number;
  extendedProjectPrice?: number;
  heatingSource?: string;
  heatingType?: string;
  entryOrientation?: string;
  hasStorey?: string;
  floorPlanImagePaths?: Array<string>;
}
