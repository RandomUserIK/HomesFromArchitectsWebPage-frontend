import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EndpointConfigData} from '../configuration/models/enpoint-config-data';
import {Project} from '../models/project/project.model';
import {environment} from '../../environments/environment';
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

  public createProject(data: Project): Observable<ProjectMessageResource> {
    return this._httpClient
      .post<ProjectMessageResource>(this.resource.address, data, {
        headers: new HttpHeaders({Accept: '*/*'}),
      });
  }


  public getAllOnPageAndCategoryAndQuery(page: number, categoryId: string, query: string): Observable<PageableProjectMessageResource> {
    console.log(this.resource.address)
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

  public removeProject(projectId: number): Observable<any> {
    return this._httpClient
      .delete(`${this.resource.address}/${projectId}`,
        {
          headers: new HttpHeaders({Accept: 'application/json'})
        })
  }

}

