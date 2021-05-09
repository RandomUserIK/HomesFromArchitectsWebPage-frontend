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

  constructor(private _httpClient: HttpClient,
              private _fileService: FileService,
              private _projectService: ProjectsService) {
  }

  public createProject(form: FormGroup, formConfig: DataField[], category: string): Observable<any> {
    const photoFiles: PhotoFile[] = [];

    formConfig.forEach(dataField => {
      switch (dataField.type) {
        case DataFieldType.IMAGE:
          photoFiles.push({type: dataField.imgType, value: form.get(dataField.formControlName).value});
          break;
        case DataFieldType.DYNAMIC_PHOTO_GALLERY:
          form.get(dataField.formControlName).value.forEach(photoFromGallery => {
            photoFiles.push({type: dataField.imgType, value: photoFromGallery});
          });
          break;
        case DataFieldType.DYNAMIC_TEXT_SECTION:
          // TODO: implement as NgxEditor
          break;
        case DataFieldType.MULTICHOICE:
          const checkedChoices = []
          for (const [choice, isChecked] of Object.entries(form.get(dataField.formControlName).value)) {
            if (isChecked){
              checkedChoices.push(choice);
            }
          }
          this.requestEntity[dataField.formControlName] = checkedChoices;
          break;
        default:
          this.requestEntity[dataField.formControlName] = form.get(dataField.formControlName).value?.toString();
          break;
      }
    });
    this.requestEntity.category = category;
    return this.sendProject(photoFiles);
  }

  private sendProject(photoFiles: PhotoFile[]): Observable<any> {
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
