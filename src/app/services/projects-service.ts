import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EndpointConfigData} from '../configuration/models/enpoint-config-data';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {PageableProjectsData} from '../models/pageable-projects-data';
import {Project} from '../models/project/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private resource: EndpointConfigData;

  constructor(private _httpClient: HttpClient,
              private _applicationConfigService: ConfigurationService) {
    this.resource = this._applicationConfigService.endpoints.find(resource => resource.name === 'project-endpoint');
  }

  public createProject(data: Project): Observable<Project> {
    return this._httpClient
      .post<Project>(this.resource.address, data, {
        headers: new HttpHeaders({Accept: '*/*'}),
      });
  }


  public getAllOnPageAndCategoryAndQuery(page: number, categoryId: string, query: string): Observable<PageableProjectsData> {
    return this._httpClient
      .get<PageableProjectsData>(`${this.resource.address}/filter?page=${page}&${query}&category=${categoryId}`);
  }

  public getProject(projectId: number): Observable<Project> {
    return this._httpClient
      // TODO: configure the given method to fetch an object of type MessageResource
      .get<Project>( `${this.resource.address}/${projectId}`, {
        headers: new HttpHeaders({Accept: 'application/json'})
      });
  }

}

