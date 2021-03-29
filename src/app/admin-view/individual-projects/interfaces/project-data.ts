export interface IndividualProjectsData {
  individualProjects: Array<ProjectData>;
  currentPage: number;
  totalElements: number;
  elementsPerPage: number;

}

export interface ProjectData {
  'id'?: number;
  'projectName'?: string;

  // 'advancedProject'?: number;
  // 'angleOfRoof'?: number;
  // 'basicProject'?: number;
  // 'builtUpArea'?: number;
  // 'energeticClass'?: string;
  // 'floorPlanPhoto'?: string;
  // 'garage'?: boolean;
  // 'grossArea'?: number;
  // 'heatingSource'?: string;
  // 'heatingType'?: string;
  //
  // 'minimumParcelWidth'?: number;
  // 'orientation'?: string;
  // 'persons'?: number;
  // 'photoPaths'?: string[];
  // 'priceOnKey'?: number;
  //
  // 'rooms'?: number;
  // 'selfHelpBuild'?: number;
  // 'textSections'?: TextSection[];
  // 'titlePhoto'?: string;
  // 'totalLivingArea'?: number;
}

export interface TextSection {
  'id'?: number;
  'title'?: string;
  'text': string;
}
