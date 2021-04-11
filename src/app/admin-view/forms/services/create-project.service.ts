import {FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectData} from '../../projects/interfaces/project-data';
import {FileService} from '../../services/file-service';

@Injectable()
export class CreateProjectService {

  private requestEntity = {} as ProjectData;

  constructor(private httpClient: HttpClient, private fileService: FileService) {
  }

  public createProject(form: FormGroup, category: string) {
    ['child_form_group', 'child_form_enumeration_group', 'child_dynamic_text_areas_group'].forEach(value => {
      this.createRequestFormFromBasicControls(form.value[value], false);
    });
    ['child_form_multichoice_group'].forEach(value => {
      this.createRequestFormFromBasicControls(form.value[value], true);
    });
    this.requestEntity['category'] = category;
    this.sendProject(form);
  }

  private sendProject(form: FormGroup) {
    this.httpClient
      .post('http://localhost:8090/api/projects', this.requestEntity, {
        headers: new HttpHeaders({Accept: 'application/json'})
      }).subscribe(createdProject => {
        let projectId = createdProject['project']['id'];
        this.fileService.postFile(form.value['child_form_file_group'].titleImage, projectId, 'titleImage').subscribe(value1 => console.log(value1));
        this.fileService.postFile(form.value['child_form_file_group'].floorPlanImage, projectId, 'floorPlanImage').subscribe(value1 => console.log(value1));
        form.value['child_dynamic_photo_galery_group'].photoGallery.forEach(photoFromGalery => {
          this.fileService.postFile(photoFromGalery["path"], projectId, 'imagePaths').subscribe(value1 => console.log(value1));
        });
      }
      , error => {
      });

  }

  public createRequestFormFromBasicControls(formGroup: any, isValueArray: boolean) {
    for (const [k, v] of Object.entries(formGroup)) {
      this.requestEntity[k] = (isValueArray) ? v.toString() : v;
    }
  }

}
