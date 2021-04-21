import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectData} from '../../../models/project-data';
import {FileService} from '../../services/file-service';
import {forkJoin, Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
import {ProjectsService} from '../../../services/projects-service';
import {DataField} from '../../../components/data-fields/models/data-field';
import {DataFieldType} from '../../../components/data-fields/models/data-field-type.enum';
import {ImageType} from '../../../components/data-fields/models/image-type.enum';

interface PhotoFile {
  type: ImageType;
  value: File;
}


@Injectable()
export class CreateCommonProjectService {

  private requestEntity: ProjectData = {};

  constructor(private httpClient: HttpClient,
              private fileService: FileService,
              private projectService: ProjectsService) {
  }

  public createProject(form: FormGroup, formConfig: DataField[], category: string): Observable<any> {
    const photoFiles: PhotoFile[] = [];
    formConfig.forEach(dataField => {

      switch (dataField.type) {
        case DataFieldType.FILE:
          photoFiles.push({type: dataField.imgType, value: form.get(dataField.formControlName).value});
          break;
        case DataFieldType.DYNAMIC_PHOTO_GALLERY:
          form.get(dataField.formControlName).value.forEach(photoFromGallery => {
            console.log(photoFromGallery)
            photoFiles.push({type: dataField.imgType, value: photoFromGallery});
          });
          break;
        case DataFieldType.DYNAMIC_TEXT_SECTION:
          this.requestEntity[dataField.formControlName] = form.get(dataField.formControlName).value;
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
      photoFileObservables.push(this.fileService.postFile(photoFile.value, projectId, photoFile.type.toString()));
    });
    return photoFileObservables;
  }

}
