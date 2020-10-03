import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor running');
    const user = this.authService.userSubject.getValue();

    if (user) {
      const modifiedRequest = req.clone({
        headers: new HttpHeaders({Authorization: `Bearer ${user.token}`})
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(req);
  }
}
