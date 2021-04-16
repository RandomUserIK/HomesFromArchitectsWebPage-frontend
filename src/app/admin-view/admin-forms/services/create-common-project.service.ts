import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectData} from '../../../models/project-data';
import {FileService} from '../../services/file-service';
import {forkJoin, Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
import {ProjectsService} from '../../../services/projects-service';
import {DataField, PhotoType} from '../../../components/form-fields/models/data-field';

interface PhotoFile {
  type: PhotoType;
  value: File;
}


@Injectable()
export class CreateCommonProjectService {

  private requestEntity: ProjectData = {};

  constructor(private httpClient: HttpClient, private fileService: FileService, private projectService: ProjectsService) {
  }

  public createProject(form: FormGroup, formConfig: DataField[]): void {
    const photoFiles: PhotoFile[] = [];

    formConfig.forEach(dataField => {

      switch (dataField.type) {
        case 'file':
          photoFiles.push({type: dataField.imgType, value: form.get(dataField.formControlName).value});
          break;
        case 'dynamicPhotoGallery':
          form.get(dataField.formControlName).value.forEach(photoFromGallery => {
            photoFiles.push({type: dataField.imgType, value: photoFromGallery});
          });
          break;
        case 'dynamicTextSection':
          this.requestEntity[dataField.formControlName] = form.get(dataField.formControlName).value;
          break;
        default:
          this.requestEntity[dataField.formControlName] = form.get(dataField.formControlName).value?.toString();
          break;

      }
    });
    this.sendProject(photoFiles);
  }

  private sendProject(photoFiles: PhotoFile[]): Observable<any> {
    return this.projectService.createProject(this.requestEntity)
      .pipe(
        exhaustMap(
          (projectId) =>
            forkJoin(this.createPhotoFileObservables(photoFiles, projectId.id))
        ));
  }

  private createPhotoFileObservables(photoFiles: PhotoFile[], projectId: number): Observable<string>[] {
    const photoFileObservables = [];

    photoFiles.forEach(photoFile => {
      photoFileObservables.push(this.fileService.postFile(photoFile.value, projectId, photoFile.type));
    });

    return photoFileObservables;
  }

}
