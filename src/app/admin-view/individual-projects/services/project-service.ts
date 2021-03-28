import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectData} from '../interfaces/project-data';
import {EndpointConfigData} from '../../interfaces/enpoint-config-data';
import {ConfigurationService} from "../../../configuration/services/configuration-service";
import {Injectable} from '@angular/core';

@Injectable()
export class ProjectService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient,
              private applicationConfigService: ConfigurationService) {
    this.resource = this.applicationConfigService.endpoints.find(x => x.name === 'project-endpoint');
  }

  public createProject(data: ProjectData): Observable<string> {
    return this.httpClient
      .post(this.resource.address + '/add', data, {
        headers: new HttpHeaders({Accept: '*/*'}),
        responseType: 'text'
      });
  }

  public getProjects(page: number): Observable<ProjectData[]> {
    console.log(this.resource.address + '/all')
    return this.httpClient
      .get<ProjectData[]>(`${this.resource.address}/all?page=${page}`);
  }

  public getProject(projectId: number): Observable<ProjectData> {
    const formData: FormData = new FormData();
    formData.append('projectId', projectId.toString());
    return this.httpClient
      .post<ProjectData>(this.resource.address + '/concrete', formData, {
        headers: new HttpHeaders({Accept: 'application/json'})
      });
  }

}

