import {DataFieldType} from '../../../../components/data-fields/models/data-field-type.enum';
import {Validators} from '@angular/forms';
import {ImageType} from '../../../../components/data-fields/models/image-type.enum';

export const COMMON_PROJECT_DATA_FIELDS = [
  {
    formControlName: 'title',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Názov projektu *',
    fullWidth: false,
    placeholder: 'Zadajte názov projektu'
  },
  {
    formControlName: 'builtUpArea',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Zastavaná plocha *',
    fullWidth: false,
    placeholder: 'Zadajte veľkosť m2'
  },
  {
    formControlName: 'persons',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Počet osôb *',
    fullWidth: false,
    placeholder: 'Zadajte pre koľko osôb je projekt stavaný'
  },
  {
    formControlName: 'rooms',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Počet izieb *',
    fullWidth: false,
    placeholder: 'Zadajte počet izieb v projekte'
  },
  {
    formControlName: 'usableArea',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Celková plocha *',
    fullWidth: false,
    placeholder: 'Zadajte veľkosť m2'
  },
  {
    formControlName: 'totalLivingArea',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Úžitková plocha *',
    fullWidth: false,
    placeholder: 'Zadajte veľkosť m2'
  },
  {
    formControlName: 'selfHelpBuildPrice',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Svojpomocná výstavba *',
    fullWidth: false,
    placeholder: 'Zadajte cenu  €'
  },
  {
    formControlName: 'onKeyPrice',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Cena na kľúč *',
    fullWidth: false,
    placeholder: 'Zadajte cenu v €'
  },
  {
    formControlName: 'basicProjectPrice',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Cena základného projektu *',
    fullWidth: false,
    placeholder: 'Zadajte cenu  €'
  },
  {
    formControlName: 'extendedProjectPrice',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Cena rozšíreného projektu *',
    fullWidth: false,
    placeholder: 'Zadajte cenu v €'
  },
  {
    formControlName: 'roofPitch',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Sklon strechy *',
    fullWidth: false,
    placeholder: 'Zadajte sklon v %'
  },
  {
    formControlName: 'minimumParcelWidth',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Minimálnu šírku pozemku *',
    fullWidth: false,
    placeholder: 'Zadajte šírku v m'
  },
  {
    formControlName: 'heatingSource',
    type: DataFieldType.TEXT,
    validator: Validators.required,
    label: 'Zdroj vykurovania *',
    fullWidth: false,
    placeholder: 'Zadajte zdroj'
  },
  {
    formControlName: 'heatingType',
    type: DataFieldType.TEXT,
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
    formControlName: 'titleImage',
    type: DataFieldType.FILE,
    validator: Validators.required,
    label: 'Vyberte titulnú fotku...',
    fullWidth: false,
    imageTitle: 'Titulná fotka'
  },
  {
    formControlName: 'floorPlanImage',
    type: DataFieldType.FILE,
    validator: Validators.required,
    label: ' Vyberte fotku pôdorysu...',
    fullWidth: false,
    imageTitle: 'Fotka pôdorysu '
  },
  {
    formControlName: 'dynamicPhotoGallery',
    type: DataFieldType.DYNAMIC_PHOTO_GALLERY,
    validator: Validators.required,
    imgType: ImageType.GALLERY_IMAGES,
    label: 'Galéria',
    fullWidth: true
  }
]
