import {Injectable} from '@angular/core';
import {Project} from '../models/project/project.model';
import {FormGroup} from '@angular/forms';
import {DataField} from '../components/data-fields/models/data-field';
import {DataFieldType} from '../components/data-fields/models/data-field-type.enum';
import {ImageFile} from '../models/web/request-bodies/image-file';

@Injectable({
  providedIn: 'root'
})
export class RequestEntityPreparationService {

  private _requestEntity: Project;
  private _photoFiles: ImageFile[];

  get photoFiles(): ImageFile[] {
    return this._photoFiles;
  }

  get requestEntity(): Project {
    return this._requestEntity;
  }

  public prepareRequestEntity(form: FormGroup, formConfig: DataField[]): void {
    this._requestEntity = {};
    this._photoFiles = [];

    formConfig.forEach(dataField => {
      if (form.get(dataField.formControlName)) {
        this.resolveDataField(dataField, form.get(dataField.formControlName).value);
      }
    });
  }

  private resolveDataField(dataField: DataField, formValue: any): void {
    switch (dataField.type) {
      case DataFieldType.IMAGE:
        this.prepareImage(dataField, formValue);
        break;
      case DataFieldType.DYNAMIC_PHOTO_GALLERY:
        this.prepareImages(dataField, formValue);
        break;
      case DataFieldType.DYNAMIC_TEXT_SECTION:
        // TODO: implement as NgxEditor
        break;
      case DataFieldType.ENUMERATION:
        this.prepareDataFieldWithStringValue(dataField, formValue);
        break;
      case DataFieldType.MULTICHOICE:
        this.prepareMultichoice(dataField, formValue);
        break;
      case DataFieldType.PRIMITIVE_TYPE:
        this.prepareDataFieldWithStringValue(dataField, formValue);
        break;
      case DataFieldType.TEXT_AREA:
        this.prepareDataFieldWithStringValue(dataField, formValue);
        break;
      case DataFieldType.RECAPTCHA:
        this.prepareDataFieldWithStringValue(dataField, formValue);
        break;
      case DataFieldType.SUBMIT_BUTTON:
        break;
      default:
        throw Error('Invalid type of data field provided');
    }
  }

  private prepareImage(dataField: DataField, formValue: File): void {
    this._photoFiles.push({type: dataField.imgType, value: formValue})
  }

  private prepareImages(dataField: DataField, formValue: File[]) {
    formValue.forEach(image => {
      this.prepareImage(dataField, image);
    });
  }

  private prepareDataFieldWithStringValue(dataField: DataField, formValue: string): void {
    this._requestEntity[dataField.formControlName] = formValue;
  }

  private prepareMultichoice(dataField: DataField, formValue: { [key: string]: boolean }): void {
    const checkedValues = []
    for (const [value, isChecked] of Object.entries(formValue)) {
      if (isChecked) {
        checkedValues.push(value);
      }
    }
    this._requestEntity[dataField.formControlName] = checkedValues;
  }
}
