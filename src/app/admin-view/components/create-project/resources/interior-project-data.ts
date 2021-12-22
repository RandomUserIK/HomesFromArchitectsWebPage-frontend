import {DataFieldType} from '../../../../components/data-fields/models/data-field-type.enum';
import {Validators} from '@angular/forms';
import {ImageType} from '../../../../components/data-fields/models/image-type.enum';

export const INTERIOR_PROJECT_DATA_FIELDS = [
  {
    formControlName: 'title',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(50)],
    label: 'Názov projektu *',
    fullWidth: false,
    placeholder: 'Zadajte názov projektu'
  },
  {
    formControlName: 'persons',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(2)],
    label: 'Počet osôb *',
    fullWidth: false,
    placeholder: 'Zadajte pre koľko osôb je projekt stavaný'
  },
  {
    formControlName: 'usableArea',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(6)],
    label: 'Celková plocha *',
    fullWidth: false,
    placeholder: 'Zadajte veľkosť m2'
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
