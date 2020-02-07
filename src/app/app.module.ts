import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieComponent } from './lottie/lottie.component';
import {LottieAnimationViewModule} from 'ng-lottie';
import { SumtecComponent } from './sumtec/sumtec.component';

@NgModule({
  declarations: [
    AppComponent,
    LottieComponent,
    SumtecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
