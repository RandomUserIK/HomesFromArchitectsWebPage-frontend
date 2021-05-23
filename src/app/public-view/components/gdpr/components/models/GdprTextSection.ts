export interface GdprTextSection {
  title: string;
  texts: GdprTexts[];
}

interface GdprTexts {
  text: string;
  subTextList: string[];
}
