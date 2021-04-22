import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProjectsService} from '../../services/projects-service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ConfigurationService} from '../../configuration/services/configuration-service';
import {EndpointConfigData} from '../../configuration/models/enpoint-config-data';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient,
              private applicationConfigService: ConfigurationService,
              private projectService: ProjectsService,
              private sanitizer: DomSanitizer) {
    this.resource = this.applicationConfigService.endpoints.find(resource => resource.name === 'photo-endpoint');
  }

  public postFile(fileToUpload: File, projectId: number, type : string): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('projectId', projectId.toString());
    formData.append('type', type);
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

  public handleFileInput(event: any, projectId: string, type : string ): void {
    const files = event.target.files;
    this.postFile(files.item(0), +projectId,type).subscribe();
  }

  public getAllPhotosOfProject(projectId: number): Observable<SafeUrl[]> {
    const projects = new Array<SafeUrl>();
    this.projectService.getProject(projectId).subscribe(data => {
      data.imagePaths.forEach(path => {
        this.getFileFromPath(path).subscribe(photo => {
          projects.push(this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new Blob([photo], {type: 'application/octet-stream'}))));
        });
      });
    });
    return of(projects);
  }

}
