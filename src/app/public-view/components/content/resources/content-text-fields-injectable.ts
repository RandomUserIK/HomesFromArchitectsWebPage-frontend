import {InjectionToken} from '@angular/core';
import {TextSection} from './content-data';

export type TextSectionGroupMap = { [key: string]: TextSection }


export const CONTENT_TEXT_SECTION_CONFIG = new InjectionToken<TextSectionGroupMap>(
  'Project content text section data',
  {
    factory: () => {
      return CONTENT_DATA_FIELDS;
    }
  }
);


const CONTENT_DATA_FIELDS: TextSectionGroupMap = {
  UPPER_CONTENT_DATA : {
    title: "Obsah projektu presne na mieru",
    text : "K dispozícií máte všetky služby na jednom mieste.<br> Premyslené do posledného detailu.",
    separatingLineWidth : '40%'
  },
  MIDDLE_CONTENT_DATA : {
    title: "Katalógové projekty",
    text : "Sami sa rozhodnite,<br>  aký typ projektu je pre vás najvhodnejší.",
    separatingLineWidth : '20%'
  }
}

