import {InjectionToken} from '@angular/core';
import {DataGroupMap} from '../../../../../../components/data-fields/models/data-group-map';
import {DataFieldType} from '../../../../../../components/data-fields/models/data-field-type.enum';
import {Validators} from '@angular/forms';


export const ORDER_DATA_FIELDS_CONFIG = new InjectionToken<DataGroupMap>(
  'Common project data fields',
  {
    factory: () => {
      return ORDER_DATA_FIELDS;
    }
  }
);


const ORDER_DATA_FIELDS: DataGroupMap = {
  firstSection: [
    {
      formControlName: 'title',
      type: DataFieldType.TEXT,
      validator: Validators.required,
      label: 'Názov projektu *',
      fullWidth: true,
      placeholder: 'Palisander'
    },
    {
      formControlName: 'constructionPlace',
      type: DataFieldType.TEXT,
      validator: Validators.required,
      label: 'Miesto výstavby *',
      fullWidth: false,
      placeholder: 'Bratislava'
    },
    {
      formControlName: 'cadastralAreaAndParcelNumber',
      type: DataFieldType.TEXT,
      validator: Validators.required,
      label: 'Katastrálne územie / parcelné číslo *',
      fullWidth: false,
      placeholder: '123 / 23'
    },
    {
      formControlName: 'projectType',
      label: 'Orientácia projektu *',
      type: DataFieldType.MULTICHOICE,
      validator: Validators.required,
      fullWidth: true,
      values: [
        'Základný typ projektu',
        'Rozšírený typ projektu',
        'Zrkadlový projekt'
      ]
    },
  ],
  secondSection: [
    {
      formControlName: 'additionalServices',
      label: 'Vyberte si doplnkové služby',
      type: DataFieldType.MULTICHOICE,
      validator: Validators.required,
      fullWidth: false,
      values: [
        'Extra sada proj. dokumentácie / +100€',
        'Digitálna dokumentácia',
        'Výkaz výmer s položkovým rozpočtom',
        'Projekt inteligentného domu',
        'Projekt osadenia domu na pozemok',
        'Interiérová štúdia',
      ]
    },
    {
      formControlName: 'connectionProjects',
      label: 'Vyberte si projekty prípojok',
      type: DataFieldType.MULTICHOICE,
      fullWidth: false,
      values: [
        'Nepotrebujem projekt prípojok',
        'Vodovodná prípojka',
        'Kanalizačná prípojka',
        'Prípojka elektrickej energie',
        'Plynová prípojka',
        'Projekt žumpy',
        'Projekt čističky odpadových vôd',
        'Projekt studne'
      ]
    },
  ]
}
