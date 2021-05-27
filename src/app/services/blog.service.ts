import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {FileService} from '../admin-view/services/file-service';
import {EndpointConfigData} from '../configuration/models/enpoint-config-data';
import {BlogArticleFormData} from '../models/blog/blog-article-form-data';
import {CreateBlogArticleMessageResource} from '../models/web/request-bodies/create-blog-article-message-resource';
import {BlogArticleMessageResource} from '../models/web/response-bodies/blog/blog-article-message-resource';
import {PageableBlogArticleMessageResource} from '../models/web/response-bodies/blog/pageable-blog-article-message-resource';
import {DeleteEntityMessageResource} from '../models/web/response-bodies/general/delete-entity-message-resource';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly ACCEPT_JSON_HEADER_NAME = 'application/json';

  private resource: EndpointConfigData;

  constructor(private _httpClient: HttpClient,
              private _fileService: FileService) {
    this.resource = environment.providers.resources.find(resource => resource.name === 'blog-endpoint');
  }

  public createBlogArticle(data: BlogArticleFormData): Observable<BlogArticleMessageResource> {
    // TODO: configure blog article title image submission
    const requestData: CreateBlogArticleMessageResource = {
      blogArticle: {
        title: data.title,
        titleImage: '',
        content: data.content.ops
      }
    };
    return this._httpClient
      .post<BlogArticleMessageResource>(this.resource.address, requestData, {
        headers: new HttpHeaders({Accept: this.ACCEPT_JSON_HEADER_NAME})
      });
  }

  public getBlogArticle(blogArticleId: number): Observable<BlogArticleMessageResource> {
    return this._httpClient
      .get<BlogArticleMessageResource>(`${this.resource.address}/${blogArticleId}`, {
        headers: new HttpHeaders({Accept: this.ACCEPT_JSON_HEADER_NAME})
      });
  }

  public getBlogArticlesOnPage(page: number, pageSize: number = 10): Observable<PageableBlogArticleMessageResource> {
    return this._httpClient
      .get<PageableBlogArticleMessageResource>(`${this.resource.address}?page=${page}&size=${pageSize}`);
  }

  public removeBlogArticle(blogArticleId: number): Observable<DeleteEntityMessageResource> {
    return this._httpClient
      .delete<DeleteEntityMessageResource>(`${this.resource.address}/${blogArticleId}`,
        {
          headers: new HttpHeaders({Accept: this.ACCEPT_JSON_HEADER_NAME})
        }
      );
  }

}
