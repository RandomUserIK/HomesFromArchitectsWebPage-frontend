export interface DataField {
  formControlName: string;
  label: string;
  type: string;
  fullWidth: boolean;
  placeholder: string;
  values?: Array<string>;
}
