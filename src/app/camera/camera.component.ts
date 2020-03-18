import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {CameraService} from '../service/camera.service';
import {Observable} from 'rxjs';
import {Offre} from '../model/offre';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';
import {TokenStorageService} from '../auth/token-storage.service';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  id: number;
  public cuurentof: Offre;
  public url: string;
  public captures: Array<any>;
  t1: any;
  description: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
// toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  constructor( private uploadService: CameraService, private  router: Router ,
               private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService, private tokenStorageService: TokenStorageService) {this.captures = []; }




  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
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

  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = user.username;
      this.id = user.id;
    }
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.catservice.getre(this.url).subscribe(data => {this.cuurentof = data; },
      error1 => {console.log(error1); });
  }


  handleError(error) {
    console.log('Error: ', error);
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
    const date = new Date().valueOf();
    let text = '';
    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(Math.floor(Math.random() *    possibleText.length));
    }
// Replace extension according to your media type
    const imageName = date + '.' + text + '.jpeg';
// call method that creates a blob from dataUri
    const imageBlob = this.dataURItoBlob(webcamImage.imageAsBase64);
    const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
    this.uploadService.pushFileToStorage(imageFile , this.description , this.id , this.cuurentof.id_offre ).subscribe(event => {
    });

  }
  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;


  }
public upload() {
} dataURItoBlob(dataURI) {
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









