export interface ProjectData {
  id?: number;
  projectName?: string;
  category?: string,
  title?:string;
  advancedProject?: number;
  angleOfRoof?: number;
  basicProject?: number;
  builtUpArea?: number;
  energeticClass?: string;
  floorPlanPhoto?: string;
  garage?: boolean;
  grossArea?: number;
  heatingSource?: string;
  heatingType?: string;
  imagePaths?: Array<string>,

  minimumParcelWidth?: number;
  orientation?: string;
  persons?: number;
  photoPaths?: string[];
  priceOnKey?: number;

  rooms?: number;
  selfHelpBuild?: number;
  textSections?: TextSection[];
  titleImage?: string;
  totalLivingArea?: number;
}

export interface TextSection {
  id?: number;
  title?: string;
  text: string;
}
