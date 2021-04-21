import {InjectionToken} from '@angular/core';
import {DataGroupMap} from '../../../components/data-fields/models/data-group-map';
import {COMMON_PROJECT_DATA_FIELDS} from './common-project-data-fields';

export const PROJECT_DATA_FIELDS_CONFIG = new InjectionToken<DataGroupMap>(
  'Common project data fields',
  {
    factory: () => {
      return PROJECT_DATA_FIELDS;
    }
  }
);


const PROJECT_DATA_FIELDS: DataGroupMap = {
  COMMON: COMMON_PROJECT_DATA_FIELDS,
  INDIVIDUAL: null,
  INTERIOR_DESIGN: null
}
