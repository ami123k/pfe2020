import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {WebcamImage} from 'ngx-webcam';
import {TokenStorageService} from '../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from './service-offre.service';
import {Offre} from '../model/offre';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private baseUrl = 'http://localhost:8080/';
  private url: string;
  cuurentof: Offre ;
  constructor(private http: HttpClient) { }
  public pictureTaken = new EventEmitter<WebcamImage>();
  private tokenStorageService: TokenStorageService;
  private  router: Router ;
  private activatedRoute: ActivatedRoute;
  private catservice: ServiceOffreService;
  private user: any;
  pushFileToStorage(file: File, Description: string, id: number, idoffre: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('description', Description);
    const req = new HttpRequest('POST', this.baseUrl + id + '/addproposition/' + idoffre, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  pushFile(file: File, Description: string, id: number, idoffre: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('description', Description);
    const req = new HttpRequest('POST', this.baseUrl + id + '/addproposition/' + idoffre, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  getFiles(idoffre: number): Observable<any> {
    return this.http.get(this.baseUrl + 'listpropbyoff/' + idoffre);
  }
   getuserbyid(url): Observable<any> {
    return this.http.get(this.baseUrl + 'api/auth/user/' + url);
  }
  getoffrebyid(url): Observable<any> {
    return this.http.get(this.baseUrl + 'offre/offre/' + url);
  }


}
