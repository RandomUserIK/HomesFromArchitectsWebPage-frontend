import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {EndpointConfigData} from '../configuration/models/enpoint-config-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private _resource: EndpointConfigData;


  constructor(private _httpClient: HttpClient) {
    this._resource = environment.providers.resources.find(resource => resource.name === 'image-endpoint');
  }

  public getImageFullUrl(imageUrl: string): string {
    return `${this._resource.address}/${imageUrl}`;
  }

  public getImageAsBlob(imageUrl: string): Observable<Blob> {
    return this._httpClient.get(
      `${this._resource.address}/${imageUrl}`,
      {responseType: 'blob'});
  }

}
