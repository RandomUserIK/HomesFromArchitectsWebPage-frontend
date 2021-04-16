export interface DataField {
  formControlName: string;
  label: string;
  type: string;
  fullWidth: boolean;
  placeholder: string;
  imgSrc?: string | ArrayBuffer;
  imageTitle?: string;
  values?: Array<string>;
}
