import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {EndpointConfigData} from '../configuration/models/enpoint-config-data';
import {DeleteEntityMessageResource} from '../models/web/response-bodies/general/delete-entity-message-resource';
import {PageableProjectMessageResource} from '../models/web/response-bodies/project/pageable-project-message-resource';
import {ProjectMessageResource} from '../models/web/response-bodies/project/project-message-resource';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private resource: EndpointConfigData;

  constructor(private _httpClient: HttpClient) {
    this.resource = environment.providers.resources.find(resource => resource.name === 'project-endpoint');
  }

  public updateProject(formData: FormData): Observable<ProjectMessageResource> {
    return this._httpClient
      .put<ProjectMessageResource>(`${this.resource.address}/${formData.get('category').toString().toLowerCase()}`, formData, {
        headers: new HttpHeaders({Accept: '*/*'})
      });
  }

  public createProject(formData: FormData): Observable<ProjectMessageResource> {
    return this._httpClient
      .post<ProjectMessageResource>(`${this.resource.address}/${formData.get('category').toString().toLowerCase()}`, formData, {
        headers: new HttpHeaders({Accept: '*/*'})
      });
  }

  public getAllOnPageAndCategoryAndQuery(page: number, categoryId: string, query: string): Observable<PageableProjectMessageResource> {
    return this._httpClient
      .get<PageableProjectMessageResource>(`${this.resource.address}/filter?page=${page}&${query}&category=${categoryId}`);
  }

  public getProject(projectId: number): Observable<ProjectMessageResource> {
    return this._httpClient
      .get<ProjectMessageResource>(`${this.resource.address}/${projectId}`, {
        headers: new HttpHeaders({Accept: 'application/json'})
      });
  }

  public getSpecifiedNumberOfProjects(page: number, categoryId: string, size: number = 10): Observable<PageableProjectMessageResource> {
    return this._httpClient
      .get<PageableProjectMessageResource>(`${this.resource.address}/?page=${page}&size=${size}&category=${categoryId}`);
  }

  public removeProject(projectId: number): Observable<DeleteEntityMessageResource> {
    return this._httpClient
      .delete<DeleteEntityMessageResource>(`${this.resource.address}/${projectId}`,
        {
          headers: new HttpHeaders({Accept: 'application/json'})
        }
      );
  }

}

