export interface EnumerationFilterModel {
  formControlId: string;
  title: string;
  values: Array<string>
}

export const ENUMERATION_FILTERS: Array<EnumerationFilterModel> = [
  {
    formControlId: 'houseType',
    title: 'Typ domu',
    values: ['bungalow', 'storey']
  },
  {
    formControlId: 'price',
    title: 'Cena domu',
    values: ['100000', '200000', '300000']
  }
];
