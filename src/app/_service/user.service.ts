import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../auth/token-storage.service';


const API_URL = 'http://localhost:8080/api/test/';
const URL = 'http://localhost:8080/api/auth';
const TOKEN_HEADER_KEY = 'Authorization';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private req: HttpRequest<any>;
  next: HttpHandler ;
  constructor(private http: HttpClient , private token: TokenStorageService) { }
   header = {
    headers: new HttpHeaders()
      .set('Authorization',  `bearer ${btoa(localStorage.getItem('token'))}`)
  };

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });

  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getusers(): Observable<any> {
    return this.http.get(URL + '/userbyrole');
  }

}
