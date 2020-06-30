import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { CertificateComponent } from './certificate/certificate.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  { path: 'video', component: VideoComponent },
  { path: 'certificate', component: CertificateComponent },
  { path: 'food', component: FoodComponent },
  { path: '', redirectTo: '/food', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
