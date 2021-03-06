import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';
import { CrearActividadPageModule } from './pages/modal/crear-actividad/crear-actividad.module';
import { DetallePageModule } from './pages/modal/detalle/detalle.module';

// Components
import { NotificationsComponent } from './components/notifications/notifications.component';

import {firebaseConfig } from '../environments/environment';

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';


// geolocalizacion
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

// estrellas 
import { IonicRatingModule } from 'ionic4-rating';

// map cordova
import { GoogleMaps } from '@ionic-native/google-maps';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    DetallePageModule,
    SearchFilterPageModule,
    CrearActividadPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    AngularFirestoreModule,
    IonicRatingModule
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {}},
    Geolocation,
    NativeGeocoder,
    GoogleMaps,
    AngularFireStorage,
    Camera
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
