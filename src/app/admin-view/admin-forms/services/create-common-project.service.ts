import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectData} from '../../../models/project-data';
import {FileService} from '../../services/file-service';
import {forkJoin, Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
import {ProjectsService} from '../../../services/projects-service';

@Injectable()
export class CreateCommonProjectService {

  private requestEntity = {} as ProjectData;

  constructor(private httpClient: HttpClient, private fileService: FileService, private projectService: ProjectsService) {
  }

  public createProject(form: FormGroup, category: string): Observable<any> {
    ['child_form_group', 'child_form_enumeration_group', 'child_dynamic_text_areas_group'].forEach(value => {
      this.createRequestFormFromBasicControls(form.value[value], false);
    });
    ['child_form_multichoice_group'].forEach(value => {
      this.createRequestFormFromBasicControls(form.value[value], true);
    });
    this.requestEntity.category = category;
    return this.sendProject(form);
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

  public createRequestFormFromBasicControls(formGroup: any, isValueArray: boolean) {
    for (const [k, v] of Object.entries(formGroup)) {
      this.requestEntity[k] = (isValueArray) ? v.toString() : v;
    }
  }

}
