import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IndividualProjectsData, ProjectData} from '../admin-view/models/project-data';
import {EndpointConfigData} from '../configuration/models/enpoint-config-data';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

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

  public searchAll(category: string , page: number): Observable<IndividualProjectsData> {
    return this.httpClient
      .get<IndividualProjectsData>(`${this.resource.address}/projects?category=${category}&page=${page}`);
  }

  public getProject(projectId: number): Observable<ProjectData> {
    const formData: FormData = new FormData();
    formData.append('projectId', projectId.toString());
    return this.httpClient
      .post<ProjectData>(this.resource.address + '/concrete', formData, {
        headers: new HttpHeaders({Accept: 'application/json'})
      });
  }

  searchByKeyword(category: string, currentPage: number, keyword:string): Observable<IndividualProjectsData> {
    return this.httpClient
      .get<IndividualProjectsData>(`${this.resource.address}/${category}/keyword?page=${currentPage}&keyword=${keyword}`);
  }

}

