import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  addavis(Description: string, id: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('description', Description);
    const req = new HttpRequest('POST', this.baseUrl +  'addavis/' + id , formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
