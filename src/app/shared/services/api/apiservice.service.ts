import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepter implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = window.localStorage.getItem('access_token');
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public baseApi = 'http://localhost:8000/api';

  constructor() { }


}
