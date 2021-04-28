import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Auth} from '../../configuration/models/application-properties';
import {ConfigurationService} from '../../configuration/services/configuration-service';
import {AuthRequest} from '../models/auth-request';
import {AuthResponse} from '../models/auth-response';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../models/user';
import {Router} from '@angular/router';

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

  public login(username: string, password: string): Observable<HttpResponse<AuthResponse>> {
    const request: AuthRequest = {username, password};
    return this._httpClient.post<AuthResponse>(
      this._resource.address + this._resource.endpoints[this.ENDPOINT_LOGIN], request,
      {
        observe: 'response'
      }
    ).pipe(
      catchError(this.handleError),
      tap(response => this.handleAuth(response))
    )
  }

  private handleAuth(response: HttpResponse<AuthResponse>): void {
    console.log(response.headers)
    const expirationDate = new Date(new Date().getTime() + response.body.jwtExpiration);
    const user = new User(response.body.id, "123", expirationDate);
    this.user.next(user);
    this.autoLogout(response.body.jwtExpiration);
    localStorage.setItem('user', JSON.stringify(user));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error occurred';
    if (!err.status)
      return throwError(errorMessage);
    switch (err.status.toString()) {
      case '401':
        errorMessage = 'Invalid login or password'
        break;
    }
    return throwError(errorMessage);
  }

  public autoLogin(): void {
    const userData: {
      id: number,
      _token: string,
      _jwtExpirationDate: string
    } = JSON.parse(localStorage.getItem('user'));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.id,
      userData._token,
      new Date(userData._jwtExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._jwtExpirationDate).getTime() - new Date().getTime();
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
    }, expirationDuration)
  }

}
