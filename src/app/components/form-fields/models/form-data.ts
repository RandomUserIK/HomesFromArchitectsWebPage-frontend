export interface FormRowData extends FormField {
  type: string;
  placeholder: string;
}

export interface FormEnumerationData extends FormField {
  placeholder: string;
  values: string[];
}

export interface FormMultichoiceData extends FormField {
  values: string[];
}

export interface FormFileData extends FormField {
  imgSrc: string | ArrayBuffer;
  imageTitle: string;
}

export interface FormField {
  formControlName: string;
  label: string;
  fullWidth: boolean;
}
