import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) {}
  testCall(): Observable<any> {
    return this.http.get('http://localhost:8000/api/open');
  }
}
