import {CommonProject} from './common-project.model';

export interface CatalogueProject extends CommonProject {
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
  floorPlanImagePaths?: Array<string>;
}
