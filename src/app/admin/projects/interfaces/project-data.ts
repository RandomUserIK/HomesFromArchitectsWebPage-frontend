export interface ProjectData {
  'advancedProject'?: number;
  'angleOfRoof'?: number;
  'basicProject'?: number;
  'builtUpArea'?: number;
  'energeticClass'?: string;
  'floorPlanPhoto'?: string;
  'garage'?: boolean;
  'grossArea'?: number;
  'heatingSource'?: string;
  'heatingType'?: string;
  'id'?: number;
  'minimumParcelWidth'?: number;
  'orientation'?: string;
  'persons'?: number;
  'photoPaths'?: string[];
  'priceOnKey'?: number;
  'projectName'?: string;
  'rooms'?: number;
  'selfHelpBuild'?: number;
  'textSections'?: TextSection[];
  'titlePhoto'?: string;
  'totalLivingArea'?: number;
}

export interface TextSection {
  'id'?: number;
  'title'?: string;
  'text': string;
}
