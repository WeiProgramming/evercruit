import { Injectable } from '@angular/core';
import {ApiserviceService} from '../api/apiservice.service';
import {Observable} from 'rxjs';
import {SignInRequest} from './models/sign-in-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUrl = '/login';
  token = 'access_token';
  user_role = 'user_role';

  constructor(private api: ApiserviceService) { }
  isAuththenticated(){
    return Boolean(localStorage.getItem(this.token));
  }
  login(request: SignInRequest): Observable<any> {
    return this.api.token(this.tokenUrl, request);
  }
  logout() {
    localStorage.removeItem(this.token);
    localStorage.removeItem(this.user_role);
  }
  // Sets data for the localstorage
  setData(token: string, userRole: string) {
    this.setToken(token);
    this.setRole(userRole);
  }
  setToken(token: string) {
    const modToken = `Bearer ${token}`;
    localStorage.setItem(this.token, modToken);
  }
  setRole(role: string) {
    localStorage.setItem(this.user_role, role);
  }
}
