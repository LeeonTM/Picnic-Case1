import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Email1Component } from './email1/email1.component';
import { Email2Component } from './email2/email2.component';
import { OnePageComponent } from './one-page/one-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Email1Component,
    Email2Component,
    OnePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
