import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { HomePage } from '../../pages/home/home';
import { HappyPage } from '../../pages/happy/happy';
import { SadPage } from '../../pages/sad/sad';


/**
 * Generated class for the VisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vision',
  templateUrl: 'vision.html',
})
export class VisionPage {
  
  goHappy = HappyPage;
  goSad = SadPage;
	
  task: AngularFireUploadTask;

  result$: Observable<any>;

  loading: Loading;
  image: string;

  homePage: HomePage;

  constructor(private navCtrl: NavController, private storage: AngularFireStorage,
  private afs: AngularFirestore,
  private camera: Camera,
  private loadingCtrl: LoadingController) {

  this.loading = this.loadingCtrl.create({
      content: `
        <div class="border-wrapper">
    <div class="content-container">
      <img class="camera-loader" src="assets/imgs/loader.svg">
      <h2 class="camera-loader-subtitle"><center>Analysing your picture...</center></h2>
    </div>
  </div> `,
    cssClass: 'camera-loader camera-loader-subtitle',
    spinner: 'hide',
  	}); 

  }

 startUpload(file: string) {
    //this.navCtrl.setRoot(LoaderPage);

    this.loading.present(); //show spinner

  	const docId = this.afs.createId();

  	const path = docId+'.jpg';

  	const photoRef = this.afs.collection('photos').doc(docId);

  	this.result$ = photoRef.valueChanges()
  		.pipe(
  			filter(data => !!data),
  			tap(_ => this.loading.dismiss())
  		);

  	this.image = 'data:image/jpg;base64,'+file;
  	this.task = this.storage.ref(path).putString(this.image, 'data_url');

    /* 
    if (this.result$.dominantEmotion === "HAPPY" )
     { this.navCtrl.push(LoaderPage); }
    else {
      this.navCtrl.setRoot(VisionPage);
    } */
  }

  async captureAndUpload() {
  	const options: CameraOptions = {
  		quality: 100,
  		destinationType: this.camera.DestinationType.DATA_URL,
  		encodingType: this.camera.EncodingType.JPEG,
  		mediaType: this.camera.MediaType.PICTURE,
  		sourceType: 
      this.camera.PictureSourceType.CAMERA
  	};
  	const result = await this.camera.getPicture(options);
  	this.startUpload(result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisionPage');
  }

}
