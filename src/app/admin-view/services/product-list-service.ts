import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IndividualProjectsData, ProjectData} from '../models/project-data';
import {EndpointConfigData} from '../../configuration/models/enpoint-config-data';
import {ConfigurationService} from "../../configuration/services/configuration-service";
import {Injectable} from '@angular/core';


@Injectable()
export class ProductListService {

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

  public searchAll(productsType: string , page: number): Observable<IndividualProjectsData> {
    return this.httpClient
      .get<IndividualProjectsData>(`${this.resource.address}/${productsType}/all?page=${page}`);
  }

  public getProject(projectId: number): Observable<ProjectData> {
    const formData: FormData = new FormData();
    formData.append('projectId', projectId.toString());
    return this.httpClient
      .post<ProjectData>(this.resource.address + '/concrete', formData, {
        headers: new HttpHeaders({Accept: 'application/json'})
      });
  }

  searchByKeyword(productsType: string, currentPage: number, keyword:string): Observable<IndividualProjectsData> {
    console.log(`${this.resource.address}/${productsType}/keyword?page=${currentPage}&keyword=${keyword}`)
    return this.httpClient
      .get<IndividualProjectsData>(`${this.resource.address}/${productsType}/keyword?page=${currentPage}&keyword=${keyword}`);
  }

}

