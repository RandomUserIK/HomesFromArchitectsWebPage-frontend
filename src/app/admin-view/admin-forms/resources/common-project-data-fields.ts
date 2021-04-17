import {DataField} from '../../../components/form-fields/models/data-field';
import {DataFieldType} from '../../../components/form-fields/models/data-field-type.enum';
import {ImageType} from '../../../components/form-fields/models/image-type.enum';

export const COMMON_PROJECT_DATA_FIELDS: {[key: string]: DataField[]} = {
  "0": [
    {
      formControlName: "heatingType",
      type: DataFieldType.TEXT,
      label: "Typ vykurovania *",
      fullWidth: false,
      placeholder: "Zadajte typ"
    },
    {
      formControlName: "titleImage",
      type: DataFieldType.FILE,
      imgType: ImageType.TITLE_IMAGE,
      label: "Vyberte titulnú fotku...",
      fullWidth: false,
      imageTitle: "Titulná fotka"
    },
    {
      formControlName: "floorPlanImage",
      type: DataFieldType.FILE,
      imgType: ImageType.FLOOR_PLAN_IMAGE,
      label: " Vyberte fotku pôdorysu...",
      fullWidth: false,
      imageTitle: "Fotka pôdorysu "
    },
    {
      formControlName: "textSection",
      type: DataFieldType.DYNAMIC_TEXT_SECTION,
      label: "Textové sekcie",
      fullWidth: true
    },
    {
      formControlName: "dynamicPhotoGallery",
      type: DataFieldType.DYNAMIC_PHOTO_GALLERY,
      imgType: ImageType.GALLERY_IMAGES,
      label: "Galéria",
      fullWidth: true
    }
  ]
}
