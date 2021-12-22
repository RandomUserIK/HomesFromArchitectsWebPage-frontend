import {Injectable} from '@angular/core';
import {DataFieldType} from '../../../../components/data-fields/models/data-field-type.enum';
import {DataField} from '../../../../components/data-fields/models/data-field';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {Project} from '../../../../models/project/project.model';
import {FileService} from '../../../services/file-service';
import {ImageService} from '../../../../services/image.service';
import {ImageModel} from '../../../../models/project/image-model';

@Injectable()
export class CreateProjectFormInitializerService {

  constructor(private _fileService: FileService, private _imageService: ImageService) {
  }

  public initialize(formConfig: DataField[], form: FormGroup, projectData: Project): void {
    formConfig.forEach((dataField) => {
      this.resolveDataField(dataField, form.get(dataField.formControlName), projectData);
    });
  }

  private resolveDataField(dataField: DataField, formControl: AbstractControl, projectData: Project): void {
    switch (dataField.type) {
      case DataFieldType.IMAGE:
        this.initializeImage(formControl, projectData.titleImage);
        break;
      case DataFieldType.DYNAMIC_PHOTO_GALLERY:
        this.initializePhotoGallery(formControl, projectData.galleryImages);
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
      default:
        throw Error('Invalid type of data field provided');
    }
  }

  private initializeImage(formControl: AbstractControl, image: ImageModel): void {
    this._imageService.getImageAsBlob(image.id.toString()).subscribe(
      (imageFile: Blob) => formControl.setValue(imageFile));
  }

  private initializePhotoGallery(formControl: AbstractControl, images: Array<ImageModel>): void {
    images.forEach((image: ImageModel) => {
      this._imageService.getImageAsBlob(image.id.toString()).subscribe((imageFile: Blob) => {
        (formControl as FormArray).push(new FormControl(imageFile)); // NOSONAR
      })
    });
  }

  private initializeFormControlWithStringValue(formControl: AbstractControl, value: string): void {
    formControl.setValue(value);
  }

  private initializeMultichoice(formControl: AbstractControl, values: string[]): void {
    const activeValues = {};
    values.forEach(value => {
      activeValues[value] = true;
    });
    formControl.patchValue(activeValues);
  }

}
