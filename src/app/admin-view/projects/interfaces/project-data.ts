export interface ProjectData {
  'id' ?: number,
  'extendedProjectPrice'?: number;
  'roofPitch'?: number;
  'basicProjectPrice'?: number;
  'builtUpArea'?: number;
  'energeticClass'?: string;
  'floorPlanImage'?: string;
  'hasGarage'?: boolean;
  'usableArea'?: number;
  'heatingSource'?: string;
  'heatingType'?: string;
  'minimumParcelWidth'?: number;
  'entryOrientation'?: string;
  'persons'?: number;
  'imagePaths'?: string[];
  'onKeyPrice'?: number;
  'title'?: string;
  'category'?: string;
  'rooms'?: number;
  'selfHelpBuildPrice'?: number;
  'textSections'?: TextSection[];
  'titleImage'?: string;
  'totalLivingArea'?: number;
}

export interface TextSection {
  'id'?: number;
  'title'?: string;
  'text': string;
}
