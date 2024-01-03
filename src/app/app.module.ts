import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Step1Component } from './step-1/step1.component';
import { NgxsModule } from '@ngxs/store';
import { LoggingServiceModule } from 'ionic-logging-service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    SharedModule,
    IonicModule.forRoot({
      innerHTMLTemplatesEnabled: true,
      swipeBackEnabled: false
      // mode: 'ios'
    }),
    AppRoutingModule,
    NgxsModule.forRoot([]),
    LoggingServiceModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
