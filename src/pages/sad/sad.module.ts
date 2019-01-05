import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SadPage } from './sad';

@NgModule({
  declarations: [
    SadPage,
  ],
  imports: [
    IonicPageModule.forChild(SadPage),
  ],
})
export class SadPageModule {}
