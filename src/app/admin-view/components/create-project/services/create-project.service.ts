import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {forkJoin, Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
import {DataField} from '../../../../components/data-fields/models/data-field';
import {ImageFile} from '../../../../models/image/image-file.model';
import {Project} from '../../../../models/project/project.model';
import {ProjectsService} from '../../../../services/projects-service';
import {RequestEntityPreparationService} from '../../../../services/request-entity-preparation.service';
import {FileService} from '../../../services/file-service';


@Injectable()
export class CreateProjectService {

  constructor(private _httpClient: HttpClient,
              private _fileService: FileService,
              private _preparationService: RequestEntityPreparationService,
              private _projectService: ProjectsService) {
  }

  public submitProject(form: FormGroup,
                       formConfig: DataField[],
                       category: string,
                       projectId: number): Observable<string[]> {
    this._preparationService.prepareRequestEntity(form, formConfig);
    this._preparationService.requestEntity.category = category;
    this._preparationService.requestEntity.id = projectId;

    return this.sendProject(this._preparationService.requestEntity, this._preparationService.photoFiles);
  }

  private sendProject(requestEntity: Project, photoFiles: ImageFile[]): Observable<string[]> {
    return this._projectService.createProject(requestEntity)
      .pipe(
        exhaustMap(
          (projectMessageResource) =>
            forkJoin(this.createPhotoFileObservables(photoFiles, projectMessageResource.project.id))
        ));
  }

  private createPhotoFileObservables(photoFiles: ImageFile[], projectId: number): Observable<string>[] {
    const photoFileObservables = [];
    photoFiles.forEach(photoFile => {
      photoFileObservables.push(this._fileService.postFile(photoFile.value, projectId, photoFile.type.toString()));
    });
    return photoFileObservables;
  }

}
