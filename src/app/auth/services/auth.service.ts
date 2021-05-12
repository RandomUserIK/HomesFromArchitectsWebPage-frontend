import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Auth} from '../../configuration/models/application-properties';
import {ConfigurationService} from '../../configuration/services/configuration-service';
import {User} from '../../models/user/user';
import {UserStorageData} from '../../models/user/user-storage-data';
import {AuthRequest} from '../../models/web/request-bodies/auth-request';
import {AuthenticationMessageResource} from '../../models/web/response-bodies/auth/authentication-message-resource';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ENDPOINT_LOGIN = 'login';
  private _resource: Auth;
  public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private _httpClient: HttpClient,
              private _config: ConfigurationService,
              private router: Router) {
    this._resource = this._config.get().providers.auth;
  }

  public login(username: string, password: string): Observable<AuthenticationMessageResource> {
    const request: AuthRequest = {username, password};
    return this._httpClient.post<AuthenticationMessageResource>(
      this._resource.address + this._resource.endpoints[this.ENDPOINT_LOGIN], request)
      .pipe(
        catchError(this.handleError),
        tap(response => this.handleAuth(response)));
  }

  private handleAuth(response: AuthenticationMessageResource): void {
    const expirationDate = new Date(new Date().getTime() + response.jwtExpiration);
    const user = new User(response.id, response.jwtToken.replace('Bearer ', ''), expirationDate);
    this.user.next(user);
    this.autoLogout(response.jwtExpiration);
    localStorage.setItem('user', JSON.stringify(user));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error occurred';
    if (!err.status)
      return throwError(errorMessage);
    if (err.status.toString() === '401') {
      errorMessage = 'Invalid login or password';
    }
    return throwError(errorMessage);
  }

  public autoLogin(): void {
    const userData: UserStorageData = JSON.parse(localStorage.getItem('user'));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.id,
      userData.token,
      new Date(userData.tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
      this.router.navigate(['/admin']);
    }
  }

  public logout(): void {
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['auth']);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }

  public autoLogout(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

}
