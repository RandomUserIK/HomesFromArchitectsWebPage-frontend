import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataField} from '../components/data-fields/models/data-field';
import {DataFieldType} from '../components/data-fields/models/data-field-type.enum';
import {Delta} from 'quill';

@Injectable({
  providedIn: 'root'
})
export class RequestEntityPreparationService {

  private _formData: FormData;

  get formData(): FormData {
    return this._formData;
  }

  public prepareFormData(form: FormGroup, formConfig: DataField[]): void {
    this._formData = new FormData();

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
      case DataFieldType.TEXT_EDITOR:
        this.prepareTextEditor(dataField, formValue);
        break;
      case DataFieldType.SUBMIT_BUTTON:
        break;
      default:
        throw Error('Invalid type of data field provided');
    }
  }

  private prepareImage(dataField: DataField, formValue: File): void {
    this._formData.append(dataField.formControlName, formValue);
  }

  private prepareImages(dataField: DataField, formValue: File[]) {
    formValue.forEach(image => {
      this.prepareImage(dataField, image);
    });
  }

  private prepareDataFieldWithStringValue(dataField: DataField, formValue: string): void {
    this.formData.append(dataField.formControlName, formValue);
  }

  private prepareMultichoice(dataField: DataField, formValue: { [key: string]: boolean }): void {
    const checkedValues = [];
    for (const [value, isChecked] of Object.entries(formValue)) {
      if (isChecked) {
        checkedValues.push(value);
      }
    }
    this._formData.append(dataField.formControlName, checkedValues.join());
  }

  private prepareTextEditor(dataField: DataField, formValue: Delta): void {
    this.formData.append(dataField.formControlName, JSON.stringify(formValue.ops));
  }

}
