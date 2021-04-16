import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectData} from '../../../models/project-data';
import {FileService} from '../../services/file-service';
import {forkJoin, Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
import {ProjectsService} from '../../../services/projects-service';
import {DataField} from '../../../components/form-fields/models/data-field';

@Injectable()
export class CreateCommonProjectService {

  private requestEntity: ProjectData = {};

  constructor(private httpClient: HttpClient, private fileService: FileService, private projectService: ProjectsService) {
  }

  public createProject(form: FormGroup, formConfig: DataField[]): void {



    formConfig.forEach(dataField => {
      if (dataField.type == 'file') {
        return;
      }
      if (dataField.type == 'dynamicTextSection') {
        this.requestEntity[dataField.formControlName] = form.get(dataField.formControlName).value
      } else {
        this.requestEntity[dataField.formControlName] = form.get(dataField.formControlName).value?.toString();
      }
    });
    console.log(this.requestEntity);
  }

  private sendProject(form: FormGroup): Observable<any> {
    return this.projectService.createProject(this.requestEntity)
      .pipe(
        exhaustMap(
          (project) =>
            forkJoin(this.createPhotoObservableArray(form, project))
        ));
  }

  private createPhotoObservableArray(form: FormGroup, project: ProjectData): Observable<string>[] {
    const photoList = [];
    const projectId = project.id
    photoList.push(this.fileService.postFile(form.value.child_form_file_group.titleImage, projectId, 'titleImage'));
    photoList.push(this.fileService.postFile(form.value.child_form_file_group.floorPlanImage, projectId, 'floorPlanImage'));
    form.value.child_dynamic_photo_galery_group.photoGallery.forEach(photoFromGallery => {
      photoList.push(this.fileService.postFile(photoFromGallery.path, projectId, 'imagePaths'));
    });
    return photoList;
  }

}
