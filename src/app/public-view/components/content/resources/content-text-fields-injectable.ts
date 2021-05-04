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
  EXACTLY_MEASURE_CONTENT_DATA : {
    title: "Obsah projektu presne na mieru",
    text : "K dispozícií máte všetky služby na jednom mieste.<br> Premyslené do posledného detailu.",
    separatingLineWidth : '40%'
  },
  CATALOGUE_PROJECT_CONTENT_DATA : {
    title: "Katalógové projekty",
    text : "Sami sa rozhodnite,<br>  aký typ projektu je pre vás najvhodnejší.",
    separatingLineWidth : '20%'
  },
  COMPLETE_CONTENT_DATA : {
    title: "Kompletný obsah projektu",
    text : "Sami sa rozhodnite,<br>  aký typ projektu je pre vás najvhodnejší.",
    separatingLineWidth : '35%'
  },
  ORDER_STEPS_CONTENT_DATA : {
    title: "Aký je postup pri objednaní projektu?",
    text : "Pre objednanie projektu vyplníte objednávky formulár. Ten slúži na nezáväznú objednávku. Na základe vami vyplnených údajov vás budeme kontaktovať s finálnou cenovou ponukou pre projekt, v závislosti od typu projektu a mnôžstva doplnkových služieb. Vystavíme vám faktúru a po prijatí platby začneme spracovávať projekt<br><br>Následne pre vás spracujeme váš projekt rodinného domu. Štandardná doba vypracovania je od troch týždňov od prijatia platby. Pri špecifických požiadavkách sa vždy na dodacej dobe dohodneme vopred.<br><br>Hotový projekt si u nás vyzdvihnete, alebo vám bude zadarmo v rámci Slovenska zaslaný kuriérom. Projekt obsahuje 5 sád projektovej dokumentácie, s ktorými zvládnete úrady aj výstavbu. K projektu si môžete doobjednať viac sád, alebo ďalšie doplnkové služby. ",
    separatingLineWidth : '35%'
  },
  INDIVIDUAL_PROJECT_CONTENT_DATA : {
    title: "Individuálny projekt",
    text : "V oblasti rodinných domov máme dlhoročné skúsenosti. S celoslovenkou pôsobnosťou prinášame projekty rodinných domov priamo na mieru požiadavkám investorov. Radi navrhujeme skvelé riešenia, ktoré klientom prinášajú pohodu a môžu šetriť náklady. Pri návrhoch sa vždy s klientom častokrát stretávame a projekt je tak vypracovaný do najmenších detailov. Možno bude ponuka individuálneho projektu pre vás ako stvorená.",
    separatingLineWidth : '20%'
  }
}

