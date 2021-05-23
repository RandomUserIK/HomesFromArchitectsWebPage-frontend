import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InstagramSearchResult} from '../models/instagram-search-result';

export const INSTAGRAM_API_KEY =
  'IGQVJYTVNVUC00SUM0aFpjNkRxdGZAFeGsyWjJSRk1pMGtGaUF4OHJiSXpaeEVFM3I4SmhIVnljckJyTEY3T3V2eDZAfbHJKemozVEMtSlhKenE4SlZAhUjBzOW5GMHpCbEZAZAUGdpTkR1OXJJaHpQNEE3RwZDZD';
export const INSTAGRAM_API_URL =
  'https://graph.instagram.com/me/media';


@Injectable()
export class InstagramSearchService {

  constructor(private http: HttpClient,
              @Inject(INSTAGRAM_API_KEY) private apiKey: string,
              @Inject(INSTAGRAM_API_URL) private apiUrl: string) {
  }

  public search(): Observable<InstagramSearchResult> {
    const params: string = [
      `fields=id,caption,media_url`,
      `access_token=${this.apiKey}`
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get<InstagramSearchResult>(queryUrl).pipe();
  }
}
