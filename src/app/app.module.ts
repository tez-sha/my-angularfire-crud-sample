import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//import af2 module
import { AngularFireModule } from 'angularfire2';

//AF2 settings
export const firebaseConfig = {
    apiKey: "AIzaSyAQpxy1Nu9qzVNQcfLiHhStG8iU_7z9sWk",
    authDomain: "fb-gh-sample.firebaseapp.com",
    databaseURL: "https://fb-gh-sample.firebaseio.com",
    projectId: "fb-gh-sample",
    storageBucket: "fb-gh-sample.appspot.com",
    messagingSenderId: "991830917858"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
