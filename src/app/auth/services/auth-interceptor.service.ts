import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {exhaustMap, take} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  private readonly MUTATING_METHODS = ['POST', 'PUT', 'DELETE'];

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user || !this.MUTATING_METHODS.includes(req.method))
          return next.handle(req);
        const modifiedRequest = req.clone({
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.token)
        });
        return next.handle(modifiedRequest);
      })
    );
  }
}
