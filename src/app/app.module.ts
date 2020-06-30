import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoComponent } from './video/video.component';
import { CertificateComponent } from './certificate/certificate.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    CertificateComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
