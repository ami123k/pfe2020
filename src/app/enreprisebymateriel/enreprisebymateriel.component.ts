import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offre} from '../model/offre';
import {UploadFileService} from '../service/upload-file.service';
import {ServiceOffreService} from '../service/service-offre.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {Entreprise} from '../model/Entreprise';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-enreprisebymateriel',
  templateUrl: './enreprisebymateriel.component.html',
  styleUrls: ['./enreprisebymateriel.component.css']
})
export class EnreprisebymaterielComponent implements OnInit {
  constructor(private uploadService: UploadFileService , private activatedRoute: ActivatedRoute,  private catservice: ServiceOffreService, private sanitizer: DomSanitizer , private router: Router) { }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
  description: string;
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
url: string ;
  selected() {
    console.log(this.categorie);
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  ngOnInit(): void {
    this.uploadService.getlistentreprisebymateriel(this.url).subscribe(e => {
      this.t1 = e;
      console.log(this.t1);
    });
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    this.afficheroffre();
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
    console.log(s);
    this.router.navigateByUrl('offrebycat/' + btoa(s.logo));
  }


  onDelete(equipe_ID, value: any): void {
    if (confirm('Voulez-vous vraiment supprimer cette entreprise?')) {

      this.catservice.updateroleuser(equipe_ID, value)
        .subscribe(data2 => {alert('fournisseur vers user'); this.router.navigateByUrl('/upload'); this.catservice.deleteentreprise(equipe_ID).subscribe(data => {
          console.log(equipe_ID);
          console.log('ok');
        }); });
    }
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


  details(s) {
    console.log(s);
    this.router.navigateByUrl('details/' + btoa(s.id_entreprise));
  }


}

export interface Equi {
  value: string;
  viewValue: string;
}
