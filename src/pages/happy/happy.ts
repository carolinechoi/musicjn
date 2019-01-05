import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { UmgProvider } from '../../providers/umg/umg';
import { StreamingMedia, StreamingAudioOptions, StreamingVideoOptions} from '@ionic-native/streaming-media';
import { Media, MediaObject } from '@ionic-native/media';
//import * as $ from "jquery";
@Component({
  selector: 'page-happy',
  templateUrl: 'happy.html'
})
export class HappyPage {
  songs: string[];
  constructor(public navCtrl:NavController, private streamingMedia: StreamingMedia, private media:Media) {
    console.log('constructing')
    // this.songs = ['https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=555290536&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533468420&oauth_version=1.0&shopId=2020&trackId=1271219&oauth_signature=1Qnx16%2Bfi%2BXv4QdGntp4z1xCgbs%3D','https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=555290536&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533468420&oauth_version=1.0&shopId=2020&trackId=4510652&oauth_signature=14rVNZVrzi6YbL9ewHoGJR%2FkUw0%3D','https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=555290536&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533468420&oauth_version=1.0&shopId=2020&trackId=4510643&oauth_signature=9g0XALT%2Bj9QdVmZgs%2BCywfayY%2BE%3D'];
  //  let btn = document.getElementById('playBtn');
    //btn.addEventListener("click", (e:Event) => this.playfirstsong());
  }
  startAudio() {
  const radio: MediaObject = this.media.create("https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=74365682&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533457386&oauth_version=1.0&shopId=2020&trackId=57470992&oauth_signature=I%2FDFUkHmyI689SrutIw1zNVwhek%3D");
  radio.play();
  }
/*  display_image(){
    this.songProvider.getSong()
    .subscribe(song => {
      return song['artists']['artist'][0]['image'];
    });
  } */
  //
//   playfirstsong():void {
//     console.log("work please");
//   //  var myArray = new Array(3);
//     var myArray = "https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=555290536&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533468420&oauth_version=1.0&shopId=2020&trackId=1271219&oauth_signature=1Qnx16%2Bfi%2BXv4QdGntp4z1xCgbs%3D";
//   //  var myArray[1] = "https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=555290536&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533468420&oauth_version=1.0&shopId=2020&trackId=4510652&oauth_signature=14rVNZVrzi6YbL9ewHoGJR%2FkUw0%3D";
// //    var myArray[2] = "https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=555290536&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533468420&oauth_version=1.0&shopId=2020&trackId=4510643&oauth_signature=9g0XALT%2Bj9QdVmZgs%2BCywfayY%2BE%3D";
//
//     document.getElementById('sound1').src = myArray;
//     document.getElementById('sound1').play();
// };
//   document.getElementById('playplease').onclick = function()
// {
//   document.getElementById('sound1').src = myArray[0];
//   document.getElementById('sound1').play();
// };
  // play(){
  //   const radio: MediaObject = this.media.create("https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=74365682&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533457386&oauth_version=1.0&shopId=2020&trackId=57470992&oauth_signature=I%2FDFUkHmyI689SrutIw1zNVwhek%3D");
  //   radio.play();
  // }
  //
  // endAudio() {
  // const radio: MediaObject = this.media.create("https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=74365682&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533457386&oauth_version=1.0&shopId=2020&trackId=57470992&oauth_signature=I%2FDFUkHmyI689SrutIw1zNVwhek%3D");
  // radio.stop();
  // }
  // startAudio() {
  //   let options: StreamingAudioOptions = {
  //     successCallback: () => { console.log('yay')},
  //     errorCallback: (e) => { console.log(e)},
  //     initFullscreen: false,
  //   }
  //
  //   this.streamingMedia.playAudio('https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=868149326&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1533453157&oauth_version=1.0&shopId=2020&trackId=57470992&oauth_signature=4v7GLN7AAW28qWjlIoGd%2BwOlXts%3D', options);
  // }
  //
  // endAudio() {
  //   this.streamingMedia.stopAudio();
  // }
  ionViewWillEnter(){
   /* this.songProvider.getSong()
    .subscribe(song => {
      console.log(JSON.stringify(song['artists']['artist'][0]['image']));
    }); */
    }
  }
