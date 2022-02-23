import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {FileService} from '../admin-view/services/file-service';
import {EndpointConfigData} from '../configuration/models/enpoint-config-data';
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

  public createBlogArticle(formData: FormData): Observable<BlogArticleMessageResource> {
    return this._httpClient
      .post<BlogArticleMessageResource>(this.resource.address, formData, {
        headers: new HttpHeaders({Accept: this.ACCEPT_JSON_HEADER_NAME})
      });
  }

  public updateBlogArticle(formData: FormData): Observable<BlogArticleMessageResource> {
    return this._httpClient
      .put<BlogArticleMessageResource>(this.resource.address, formData, {
        headers: new HttpHeaders({Accept: this.ACCEPT_JSON_HEADER_NAME})
      });
  }

  public getBlogArticle(blogArticleId: number): Observable<BlogArticleMessageResource> {
    return this._httpClient
      .get<BlogArticleMessageResource>(`${this.resource.address}/${blogArticleId}`, {
        headers: new HttpHeaders({Accept: this.ACCEPT_JSON_HEADER_NAME})
      });
  }

  public getRandomBlogArticle(size: number): Observable<PageableBlogArticleMessageResource> {
    return this._httpClient
      .get<PageableBlogArticleMessageResource>(`${this.resource.address}/random?size=${size}`);
  }

  // tslint:disable-next-line:max-line-length
  public getBlogArticlesOnPage(page: number, pageSize: number = 10, isGalleryPreview = false): Observable<PageableBlogArticleMessageResource> {
    return this._httpClient
      // tslint:disable-next-line:max-line-length
      .get<PageableBlogArticleMessageResource>(`${this.resource.address}?page=${page}&size=${pageSize}&isGalleryPreview=${isGalleryPreview}`);
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
