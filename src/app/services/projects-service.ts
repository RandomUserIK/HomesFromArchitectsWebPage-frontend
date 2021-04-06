import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectData} from '../models/project-data';
import {EndpointConfigData} from '../configuration/models/enpoint-config-data';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {Injectable} from '@angular/core';
import {PageableProjectsData} from '../models/pageable-projects-data';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient,
              private applicationConfigService: ConfigurationService) {
    this.resource = this.applicationConfigService.endpoints.find(x => x.name === 'project-endpoint');
  }

  public getAllOnPageAndCategory(page: number, category: string): Observable<PageableProjectsData> {
    return this.httpClient
      .get<PageableProjectsData>(`${this.resource.address}/projects/categorical?page=${page}&category=${category}`);
  }

  public getAllOnPageAndCategoryAndQuery(page: number, categoryId: string, query: string): Observable<PageableProjectsData> {
    return this.httpClient
      .get<PageableProjectsData>(`${this.resource.address}/projects/filter?page=${page}&${query}&category=${categoryId}`);
  }

  public searchAll(category: string, page: number): Observable<PageableProjectsData> {
    return this.httpClient
      .get<PageableProjectsData>(`${this.resource.address}/projects?category=${category}&page=${page}`);
  }

  public getProject(projectId: number): Observable<ProjectData> {
    const formData: FormData = new FormData();
    formData.append('projectId', projectId.toString());
    return this.httpClient
      .post<ProjectData>(this.resource.address + '/concrete', formData, {
        headers: new HttpHeaders({Accept: 'application/json'})
      });
  }

  searchByKeyword(category: string, currentPage: number, keyword: string): Observable<PageableProjectsData> {
    return this.httpClient
      .get<PageableProjectsData>(`${this.resource.address}/${category}/keyword?page=${currentPage}&keyword=${keyword}`);
  }

}

