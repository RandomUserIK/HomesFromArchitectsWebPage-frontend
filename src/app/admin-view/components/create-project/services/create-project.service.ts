import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {forkJoin, Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
import {DataField} from '../../../../components/data-fields/models/data-field';
import {DataFieldType} from '../../../../components/data-fields/models/data-field-type.enum';
import {ImageType} from '../../../../components/data-fields/models/image-type.enum';
import {Project} from '../../../../models/project/project.model';
import {ProjectsService} from '../../../../services/projects-service';
import {FileService} from '../../../services/file-service';

interface PhotoFile {
  type: ImageType;
  value: File;
}

@Injectable()
export class CreateProjectService {

  private requestEntity: Project = {};
  private photoFiles: PhotoFile[] = [];

  constructor(private _httpClient: HttpClient,
              private _fileService: FileService,
              private _projectService: ProjectsService) {
  }

  public createProject(form: FormGroup, formConfig: DataField[], category: string): Observable<string[]> {

    formConfig.forEach(dataField => {
      this.resolveDataField(dataField, form.get(dataField.formControlName).value);
    });
    this.requestEntity.category = category;
    return this.sendProject(this.photoFiles);
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
      default:
        throw Error('Invalid type of data field provided');
    }
  }

  private prepareImage(dataField: DataField, formValue: File): void {
    this.photoFiles.push({type: dataField.imgType, value: formValue})
  }

  private prepareImages(dataField: DataField, formValue: File[]) {
    formValue.forEach(image => {
      this.prepareImage(dataField, image);
    });
  }

  private prepareDataFieldWithStringValue(dataField: DataField, formValue: string): void {
    this.requestEntity[dataField.formControlName] = formValue;
  }

  private prepareMultichoice(dataField: DataField, formValue: string[]): void {
    const checkedValues = []
    for (const [value, isChecked] of Object.entries(formValue)) {
      if (isChecked) {
        checkedValues.push(value);
      }
    }
    this.requestEntity[dataField.formControlName] = checkedValues;
  }

  private sendProject(photoFiles: PhotoFile[]): Observable<string[]> {
    return this._projectService.createProject(this.requestEntity)
      .pipe(
        exhaustMap(
          (projectId) =>
            forkJoin(this.createPhotoFileObservables(photoFiles, projectId.id))
        ));
  }

  private createPhotoFileObservables(photoFiles: PhotoFile[], projectId: number): Observable<string>[] {
    const photoFileObservables = [];
    photoFiles.forEach(photoFile => {
      photoFileObservables.push(this._fileService.postFile(photoFile.value, projectId, photoFile.type.toString()));
    });
    return photoFileObservables;
  }

}
