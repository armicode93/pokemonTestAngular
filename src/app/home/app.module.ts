import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [],

  bootstrap: [AppComponent]
  // con questo dico ad angular quale e il primo component che deve caricare quando carico l app
})
export class AppModule { }
