import {DataFieldType} from '../../../../components/data-fields/models/data-field-type.enum';
import {Validators} from '@angular/forms';
import {ImageType} from '../../../../components/data-fields/models/image-type.enum';

export const COMMON_PROJECT_DATA_FIELDS = [
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
    formControlName: 'persons',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(2), Validators.min(0)],
    label: 'Počet osôb *',
    fullWidth: false,
    placeholder: 'Zadajte pre koľko osôb je projekt stavaný'
  },
  {
    formControlName: 'rooms',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(2), Validators.min(0)],
    label: 'Počet izieb *',
    fullWidth: false,
    placeholder: 'Zadajte počet izieb v projekte'
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
    formControlName: 'totalLivingArea',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(6), Validators.min(0)],
    label: 'Úžitková plocha *',
    fullWidth: false,
    placeholder: 'Zadajte veľkosť m2'
  },
  {
    formControlName: 'selfHelpBuildPrice',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(7), Validators.min(0)],
    label: 'Svojpomocná výstavba *',
    fullWidth: false,
    placeholder: 'Zadajte cenu  €'
  },
  {
    formControlName: 'onKeyPrice',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(7), Validators.min(0)],
    label: 'Cena na kľúč *',
    fullWidth: false,
    placeholder: 'Zadajte cenu v €'
  },
  {
    formControlName: 'basicProjectPrice',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(7), Validators.min(0)],
    label: 'Cena základného projektu *',
    fullWidth: false,
    placeholder: 'Zadajte cenu  €'
  },
  {
    formControlName: 'extendedProjectPrice',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(7), Validators.min(0)],
    label: 'Cena rozšíreného projektu *',
    fullWidth: false,
    placeholder: 'Zadajte cenu v €'
  },
  {
    formControlName: 'roofPitch',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(2), Validators.min(0)],
    label: 'Sklon strechy *',
    fullWidth: false,
    placeholder: 'Zadajte sklon v %'
  },
  {
    formControlName: 'minimumParcelWidth',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: [Validators.required, Validators.maxLength(6), Validators.min(0)],
    label: 'Minimálnu šírku pozemku *',
    fullWidth: false,
    placeholder: 'Zadajte šírku v m'
  },
  {
    formControlName: 'heatingSource',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: Validators.required,
    label: 'Zdroj vykurovania *',
    fullWidth: false,
    placeholder: 'Zadajte zdroj'
  },
  {
    formControlName: 'heatingType',
    type: DataFieldType.PRIMITIVE_TYPE,
    validator: Validators.required,
    label: 'Typ vykurovania *',
    fullWidth: false,
    placeholder: 'Zadajte typ'
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
    formControlName: 'entryOrientation',
    label: 'Orientácia projektu *',
    type: DataFieldType.MULTICHOICE,
    validator: Validators.required,
    fullWidth: true,
    values: [
      'S',
      'J',
      'V',
      'Z'
    ]
  },
  {
    formControlName: 'textSections',
    type: DataFieldType.DYNAMIC_TEXT_SECTION,
    fullWidth: true,
    label: 'Textové sekcie'
  },
  {
    formControlName: 'titleImage',
    type: DataFieldType.IMAGE,
    validator: Validators.required,
    imgType: ImageType.TITLE_IMAGE,
    label: 'Vyberte titulnú fotku...',
    fullWidth: true,
    imageTitle: 'Titulná fotka'
  },
  {
    formControlName: 'floorPlanImagePaths',
    type: DataFieldType.DYNAMIC_PHOTO_GALLERY,
    validator: Validators.required,
    imgType: ImageType.GALLERY_FLOOR_PLANS_IMAGES,
    label: 'Galéria fotiek pôdorysu',
    fullWidth: true
  },
  {
    formControlName: 'imagePaths',
    type: DataFieldType.DYNAMIC_PHOTO_GALLERY,
    validator: Validators.required,
    imgType: ImageType.GALLERY_IMAGES,
    label: 'Galéria',
    fullWidth: true
  }
];
