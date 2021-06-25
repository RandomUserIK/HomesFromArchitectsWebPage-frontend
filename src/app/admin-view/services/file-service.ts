import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {EndpointConfigData} from '../../configuration/models/enpoint-config-data';
import {ImageUploadMessageResource} from '../../models/web/response-bodies/image/image-upload-message-resource';
import {ProjectsService} from '../../services/projects-service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private resource: EndpointConfigData;

  constructor(private _httpClient: HttpClient,
              private _projectService: ProjectsService,
              private _sanitizer: DomSanitizer) {
    this.resource = environment.providers.resources.find(resource => resource.name === 'photo-endpoint');
  }

  public postFile(fileToUpload: File, entityId: number, type: string): Observable<ImageUploadMessageResource> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('entityId', entityId.toString());
    formData.append('type', type);
    return this._httpClient
      .post<ImageUploadMessageResource>(this.resource.address + '/upload', formData, {
        headers: new HttpHeaders({Accept: 'application/json'}),
        responseType: 'json'
      });
  }

  public getFileFromPathAsSafeUrl(path: string): Observable<SafeUrl> {
    return this.getFileFromPath(path)
      .pipe(
        map((image) => {
          return this._sanitizer.bypassSecurityTrustUrl( // NOSONAR
            URL.createObjectURL(new Blob([image], {type: 'application/octet-stream'}))
          );
        })
      );
  }

  public getFileFromPath(path: string): Observable<Blob> {
    return this._httpClient
      .get(`${this.resource.address}?path=${path}`, {
        headers: new HttpHeaders({Accept: 'application/octet-stream'}),
        responseType: 'blob'
      });
  }

  public handleFileInput(event: any, projectId: string, type: string): void {
    const files = event.target.files;
    this.postFile(files.item(0), +projectId, type).subscribe();
  }

  public getAllImagesAsSafeUrl(imagePaths: Array<string>): Observable<Array<SafeUrl>> {
    const imagesAsSafeUrl: Array<SafeUrl> = [];
    imagePaths.forEach((path) => {
      this.getFileFromPathAsSafeUrl(path).subscribe((imageAsSafeUrl) => {
        imagesAsSafeUrl.push(imageAsSafeUrl);
      });
    });
    return of(imagesAsSafeUrl);
  }

}
