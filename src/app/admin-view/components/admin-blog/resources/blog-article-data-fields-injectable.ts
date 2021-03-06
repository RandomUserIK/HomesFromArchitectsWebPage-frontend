import {InjectionToken} from '@angular/core';
import {Validators} from '@angular/forms';
import {DataFieldType} from '../../../../components/data-fields/models/data-field-type.enum';
import {DataGroupMap} from '../../../../components/data-fields/models/data-group-map';
import {ImageType} from '../../../../components/data-fields/models/image-type.enum';

export const BLOG_ARTICLE_DATA_FIELDS_CONFIG = new InjectionToken<DataGroupMap>(
  'Blog article data fields',
  {
    factory: () => {
      return BLOG_ARTICLE_DATA_FIELDS;
    }
  }
);

export const BLOG_ARTICLE_DATA_FIELDS: DataGroupMap = {
  formGroup: [
    {
      formControlName: 'title',
      type: DataFieldType.PRIMITIVE_TYPE,
      validator: [Validators.required, Validators.maxLength(50)],
      label: 'Názov príspevku *',
      fullWidth: true,
      placeholder: 'Nový príspevok'
    },
    {
      formControlName: 'description',
      type: DataFieldType.TEXT_AREA,
      validator: [Validators.required, Validators.maxLength(200)],
      label: 'Popis príspevku *',
      fullWidth: true,
      placeholder: 'Krátky popis príspevku'
    },
    {
      formControlName: 'titleImage',
      type: DataFieldType.IMAGE,
      validator: Validators.required,
      imgType: ImageType.BLOG_ARTICLE_TITLE_IMAGE,
      label: 'Vyberte titulnú fotku...',
      fullWidth: true,
      imageTitle: 'Titulná fotka'
    },
    {
      formControlName: 'content',
      type: DataFieldType.TEXT_EDITOR,
      validator: Validators.required,
      label: 'Obsah príspevku *',
      fullWidth: true,
      placeholder: 'Napíšte obsah príspevku'
    }
  ]
};
