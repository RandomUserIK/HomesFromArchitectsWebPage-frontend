export interface EnumerationFilterModel {
  formControlId: string;
  title: string;
  values: Array<string>
}

export const ENUMERATION_FILTERS: Array<EnumerationFilterModel> = [
  {
    formControlId: 'persons',
    title: 'Počet osôb',
    values: ['3', '4', '5']
  },
  {
    formControlId: 'price',
    title: 'Cena domu',
    values: ['100000', '200000', '300000']
  }
];
