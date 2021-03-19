import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Auth} from '../../../configuration/interfaces/application-properties';
import {ConfigurationService} from '../../../configuration/services/configuration-service';
import {AuthenticationRequest} from '../models/authentication-request';
import {AuthenticationResponse} from '../models/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private ENDPOINT_LOGIN = 'login';

  private _resource: Auth;

  constructor(private _httpClient: HttpClient,
              private _config: ConfigurationService) {
    this._resource = this._config.get().providers.auth;
  }

  login(username: string, password: string): Observable<AuthenticationResponse> {
    const request: AuthenticationRequest = {username, password};
    const key = 'login';
    return this._httpClient.post<AuthenticationResponse>(
      this._resource.address + this._resource.endpoints[this.ENDPOINT_LOGIN], request);
  }

}
