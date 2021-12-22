import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {DataField} from '../../../../components/data-fields/models/data-field';
import {ProjectsService} from '../../../../services/projects-service';
import {RequestEntityPreparationService} from '../../../../services/request-entity-preparation.service';
import {FileService} from '../../../services/file-service';
import {ProjectMessageResource} from '../../../../models/web/response-bodies/project/project-message-resource';


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
                       projectId: number): Observable<ProjectMessageResource> {
    this._preparationService.prepareFormData(form, formConfig);
    this._preparationService.formData.append('category', category);
    if (projectId) {
      this._preparationService.formData.append('id', projectId.toString());
      return this._projectService.updateProject(this._preparationService.formData);
    } else {
      return this._projectService.createProject(this._preparationService.formData);
    }
  }

}
