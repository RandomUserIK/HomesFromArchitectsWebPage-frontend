import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProjectService} from '../individual-projects/services/project-service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {EndpointConfigData} from '../interfaces/enpoint-config-data';
import {ConfigurationService} from "../../configuration/services/configuration-service";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient,
              private applicationConfigService: ConfigurationService,
              private projectService: ProjectService,
              private sanitizer: DomSanitizer) {
    this.resource = this.applicationConfigService.endpoints.find(x => x.name === 'photo-endpoint');
  }

  private postFile(fileToUpload: File, projectId: number): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('projectId', projectId.toString());
    return this.httpClient
      .post(this.resource.address + '/upload', formData, {
        headers: new HttpHeaders({Accept: 'application/json'}),
        responseType: 'text'
      });
  }

  public getFileFromPath(path: string): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('path', path);
    return this.httpClient
      .post(this.resource.address + '/preview', formData, {
        headers: new HttpHeaders({Accept: 'application/octet-stream'}),
        responseType: 'blob'
      });
  }

  public handleFileInput(event: any, projectId: string): void {
    const files = event.target.files;
    this.postFile(files.item(0), +projectId).subscribe();
  }

  public getAllPhotosOfProject(projectId: number): Observable<SafeUrl[]> {
    const projects = new Array<SafeUrl>();
    this.projectService.getProject(projectId).subscribe(data => {
      data.photoPaths.forEach(path => {
        this.getFileFromPath(path).subscribe(photo => {
          projects.push(this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new Blob([photo], {type: 'application/octet-stream'}))));
        });
      });
    });
    return of(projects);
  }

}
