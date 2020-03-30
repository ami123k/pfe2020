import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpResponse, HttpEventType, HttpClient} from '@angular/common/http';
import {UploadFileService} from '../service/upload-file.service';
import {Observable, Subject} from 'rxjs';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {GalleriaModule} from 'primeng/galleria';

import {Entreprise} from '../model/Entreprise';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';
import {Offre} from '../model/offre';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {CameraService} from '../service/camera.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  constructor(private uploadService: UploadFileService , private activatedRoute: ActivatedRoute,  private catservice: ServiceOffreService, private sanitizer: DomSanitizer , private router: Router) { }
  description: string;
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
  public offres: Offre;

  cheminImage1: any = 'http://localhost:8080/files/';
  showFile = false;
  fileUploads: Observable<string[]>;
  t1: any;
  name: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  fileInfos: Observable<any>;
  @Input() fileUpload: string;
  public entreprise: Entreprise;
  equipes: Equi[] = [
    {value: 'fourniture', viewValue: 'fourniture'},
    {value: 'informatique', viewValue: 'informatique'},
    {value: 'materiel', viewValue: 'materiel'},
    {value: 'education', viewValue: 'education'}
  ];
  categorie;
  public videoOptions: MediaTrackConstraints = {
// width: {ideal: 1024},
// height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];
// webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
// switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public webcamImage: WebcamImage = null;

  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
// toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  selected() {
    console.log(this.categorie);
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  dtOption: any = {};
  ngOnInit(): void {
    this.uploadService.getFiles().subscribe(e => {
      this.t1 = e._embedded.entreprises;
      console.log(this.t1);
    });
     WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
          this.afficheroffre();

    this.dtOption = {
      paging: true,
      ordering: true,
      info: true,
      simple_numbers: true,
      full: true
    };
    $(() => {
      $('table.table-striped').DataTable(this.dtOption);
    });

  }

  details(s) {
    console.log(s);
    const url = s._links.self.href;
    this.router.navigateByUrl('details/' + btoa(url));
  }
  afficheroffre() {
    this.catservice.getresouce(this.catservice.host + 'offres')
      .subscribe(res => {
        this.offres = res._embedded.offres;
        console.log(res);
        console.log(this.offres);
      });
  }
  informatique() {
    this.router.navigateByUrl('entrepriseinformatique');
  }
  fourniture() {
    this.router.navigateByUrl('entreprisefourniture');
  }
  materiel() {
    this.router.navigateByUrl('entreprisemateriel');
  }
  education() {
    this.router.navigateByUrl('entrepriseeducation');
  }
  upload() {
    const date = new Date().valueOf();
    let text = '';
    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(Math.floor(Math.random() *    possibleText.length));
    }
// Replace extension according to your media type
    const imageName = date + '.' + text + '.jpeg';
// call method that creates a blob from dataUri
    const imageBlob = this.dataURItoBlob(this.webcamImage.imageAsBase64);
    const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload, imageFile, this.description, this.name, this.categorie).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }

  showFiles(enable: boolean) {
    this.uploadService.getFiles().subscribe(e => {
      this.t1 = e;
      console.log(this.t1);
    });

  }
  findoffrebycategorie(s) {
    console.log(this.categorie);
    const categorie = s.categorie;
    this.router.navigateByUrl('offrebycat/' + s);
  }




  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public showNextWebcam(directionOrDeviceId: boolean|string): void {
// true => move forward through devices
// false => move backwards through devices
// string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }



  public handleImage(webcamImage: WebcamImage ): void {
    console.info('received webcam image', webcamImage);
    console.info('webcam', webcamImage.imageAsBase64);
    console.info('webcam', webcamImage.imageAsDataUrl);
    console.info('webcam', webcamImage.imageData);
    console.info('webcam', webcamImage.toString());
    this.pictureTaken.emit(webcamImage);
    console.log(    this.pictureTaken.emit(webcamImage));
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;


  }


  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }






}

export interface Equi {
  value: string;
  viewValue: string;
}
