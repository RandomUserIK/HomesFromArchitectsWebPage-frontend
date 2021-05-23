import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InstagramSearchResult} from '../models/instagram-search-result';
import {environment} from '../../../../../environments/environment';


@Injectable()
export class InstagramSearchService {

  constructor(private http: HttpClient) {
  }

  public search(limit: number): Observable<InstagramSearchResult> {
    const url = environment.providers.resources.find(resource => resource.name === 'instagram-endpoint').address + '?limit='+limit;
    return this.http.get<InstagramSearchResult>(url).pipe();
  }
}
