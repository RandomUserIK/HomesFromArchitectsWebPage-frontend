import {DataFieldType} from '../../../../components/data-fields/models/data-field-type.enum';
import {Validators} from '@angular/forms';
import {ImageType} from '../../../../components/data-fields/models/image-type.enum';

export const INDIVIDUAL_PROJECT_DATA_FIELDS = [
  {
    formControlName: 'title',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(50)],
    label: 'Názov projektu *',
    fullWidth: false,
    placeholder: 'Zadajte názov projektu'
  },
  {
    formControlName: 'builtUpArea',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(6), Validators.min(0)],
    label: 'Zastavaná plocha *',
    fullWidth: false,
    placeholder: 'Zadajte veľkosť m2'
  },
  {
    formControlName: 'usableArea',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(6), Validators.min(0)],
    label: 'Celková plocha *',
    fullWidth: false,
    placeholder: 'Zadajte veľkosť m2'
  },
  {
    formControlName: 'persons',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(2), Validators.min(0)],
    label: 'Počet osôb *',
    fullWidth: false,
    placeholder: 'Zadajte pre koľko osôb je projekt stavaný'
  },
  {
    formControlName: 'energeticClass',
    type: DataFieldType.ENUMERATION,
    validator: Validators.required,
    label: 'Energetická trieda projektu *',
    fullWidth: false,
    placeholder: 'Vyberte energetickú triedu projektu',
    values: [
      'A1',
      'A0',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G'
    ]
  },
  {
    formControlName: 'hasGarage',
    label: 'Obsahuje projekt garáž ? *',
    validator: Validators.required,
    type: DataFieldType.ENUMERATION,
    fullWidth: false,
    placeholder: 'Vyberte jednu z možností',
    values: [
      'Áno',
      'Nie'
    ]
  },
  {
    formControlName: 'textSections',
    type: DataFieldType.DYNAMIC_TEXT_SECTION,
    fullWidth: true,
    label: 'Textové sekcie'
  },
  {
    formControlName: 'titleImageFile',
    type: DataFieldType.IMAGE,
    validator: Validators.required,
    imgType: ImageType.TITLE_IMAGE,
    label: 'Vyberte titulnú fotku...',
    fullWidth: false,
    imageTitle: 'Titulná fotka'
  },
  {
    formControlName: 'galleryImageFiles',
    type: DataFieldType.DYNAMIC_PHOTO_GALLERY,
    validator: Validators.required,
    imgType: ImageType.GALLERY_IMAGES,
    label: 'Galéria',
    fullWidth: true
  }
];
