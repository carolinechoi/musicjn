import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VisionPage } from '../../pages/vision/vision';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToCamera() {
  	this.navCtrl.setRoot(VisionPage);
  }

}
