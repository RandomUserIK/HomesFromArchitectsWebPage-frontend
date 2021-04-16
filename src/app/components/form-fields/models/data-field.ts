export interface DataField {
  formControlName: string;
  label: string;
  type: string;
  fullWidth: boolean;
  placeholder: string;
  imgSrc?: string | ArrayBuffer;
  imgType?: PhotoType;
  imageTitle?: string;
  values?: Array<string>;
}

export type PhotoType = 'titleImage' | 'floorPlanImage' | 'imagePaths';
