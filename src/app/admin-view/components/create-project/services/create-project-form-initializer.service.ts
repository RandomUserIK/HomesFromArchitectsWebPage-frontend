import {Injectable} from '@angular/core';
import {DataFieldType} from '../../../../components/data-fields/models/data-field-type.enum';
import {DataField} from '../../../../components/data-fields/models/data-field';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {Project} from '../../../../models/project/project.model';
import {FileService} from '../../../services/file-service';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectFormInitializerService {

  constructor(private fileService: FileService) {
  }

  public initialize(formConfig: DataField[], form: FormGroup, projectData: Project): void {
    formConfig.forEach(dataField => {

      const formControl = form.get(dataField.formControlName)

      switch (dataField.type) {
        case DataFieldType.IMAGE:
          this.initializePhoto(formControl, projectData[dataField.formControlName]);
          break;
        case DataFieldType.DYNAMIC_PHOTO_GALLERY:
          this.initializePhotoGallery(formControl, projectData[dataField.formControlName]);
          break;
        case DataFieldType.DYNAMIC_TEXT_SECTION:
          // TODO: implement as NgxEditor
          break;
        case DataFieldType.ENUMERATION:
          this.initializeFormControlWithStringValue(formControl, projectData[dataField.formControlName]);
          break;
        case DataFieldType.MULTICHOICE:
          this.initializeMultichoice(formControl, projectData[dataField.formControlName]);
          break;
        case DataFieldType.PRIMITIVE_TYPE:
          this.initializeFormControlWithStringValue(formControl, projectData[dataField.formControlName]);
          break;
      }
    });
  }

  private initializePhoto(formControl: AbstractControl, photoPath: string): void {
    this.fileService.getFileFromPath(photoPath).subscribe((photoBlob) => {
      const file = new File([photoBlob], photoPath.split('/').pop());
      formControl.setValue(file);
    });
  }

  private initializePhotoGallery(formControl: AbstractControl, photoPaths: Array<string>): void {
    photoPaths.forEach((photoPath) => {
      this.fileService.getFileFromPath(photoPath).subscribe((photoBlob) => {
        const file = new File([photoBlob], photoPath.split('/').pop());
        (formControl as FormArray).push(new FormControl(file));
      });
    })
  }

  private initializeFormControlWithStringValue(formControl: AbstractControl, value: string): void {
    formControl.setValue(value);
  }

  private initializeMultichoice(formControl: AbstractControl, values: Array<string>): void {
    const activeValues = {};
    values.forEach(value => {
      activeValues[value] = true;
    });
    formControl.patchValue(activeValues);
  }

}
