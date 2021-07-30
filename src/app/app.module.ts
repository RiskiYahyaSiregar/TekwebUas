import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material design
import {MaterialDesign} from './material/material';
//material card
import { PublicComponent } from './public/public.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './admin/images/images.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PublicComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
