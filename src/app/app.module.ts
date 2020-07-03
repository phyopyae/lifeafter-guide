import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoComponent } from './video/video.component';
import { CertificateComponent } from './certificate/certificate.component';
import { FoodComponent } from './food/food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewbieComponent } from './newbie/newbie.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    CertificateComponent,
    FoodComponent,
    NewbieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
