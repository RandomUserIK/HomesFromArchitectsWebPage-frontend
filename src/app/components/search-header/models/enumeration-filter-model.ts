export interface EnumerationFilterModel {
  formControlId: string;
  title: string;
  values: Array<string>
}

// TODO: add m^2 filter after obtaining further info from HFA
export const ENUMERATION_FILTERS: Array<EnumerationFilterModel> = [
  {
    formControlId: 'rooms',
    title: 'Počet izieb',
    values: ['4', '5', '6+']
  },
  {
    formControlId: 'hasGarage',
    title: 'Garáž',
    values: ['áno', 'nie']
  },
  {
    formControlId: 'hasStorey',
    title: 'Poschodový',
    values: ['áno', 'nie']
  }
];
