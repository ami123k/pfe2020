import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offre} from '../model/offre';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiceOffreService {

  public host = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }




  public Deleteprod(url) {
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    return this.httpClient.delete(url);
  }
  public save(url, data): Observable<any> {
    return this.httpClient.post<any>(url, data);
  }
  public getresouce(url): Observable<any> {
    return this.httpClient.get<any>(url);
  }
  public update(url, data): Observable<any> {
    return this.httpClient.put<any>(url, data);
  }

  public getre(url): Observable<any> {
    return this.httpClient.get<any>(url);
  }

  delete(offreid: number): Observable<any> {
    console.log('aa');
    console.log(offreid);
    return this.httpClient.delete<Offre>(this.host + 'offre/delete/' + offreid);
    console.log('zz');
    console.log(offreid);
  }

}
