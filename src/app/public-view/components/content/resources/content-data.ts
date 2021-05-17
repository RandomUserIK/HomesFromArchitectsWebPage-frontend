export interface TableContentData {
  name: string;
  basic: string | boolean;
  advanced: string | boolean;
}

export interface TextSection {
  title: string;
  text: string;
  separatingLineWidth: string;
}

export interface ExtendContentColumnData {
  title: string;
  subtitle: string;
  fullWidth: boolean,
  values: string[];
}
